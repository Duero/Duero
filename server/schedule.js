import {Buildings, Cleaners, Schedules, Jobs} from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
  'schedule.markAsDone'(jobId) {
    check(jobId, String);

    const today = moment({ hour: 0, minute: 0, second: 0 });
    const job = Jobs.findOne(jobId);
    const cleaner = Cleaners.findOne(job.cleaner_id);
    const building = Buildings.findOne(job.building_id);

    const price = cleaner.salary / 60 * building.duration;

    const update = {
      date: today.toDate(), 
      done: true, 
      price: price, 
      salary: cleaner.salary, 
      duration: building.duration
    };
    log(update)
    Jobs.update(jobId, {$set: update});
  },

  'schedule.reassign'(jobId, cleanerId) {
    check(jobId, String);
    check(cleanerId, String);

    const today = moment({ hour: 0, minute: 0, second: 0 });
    const job = Jobs.findOne(jobId);

    const cleaner = Cleaners.findOne(cleanerId);
    const building = Buildings.findOne(job.building_id);

    const price = cleaner.salary / 60 * building.duration;

    Jobs.update(jobId, {$set: {
      cleaner_id: cleanerId, 
      date: today.toDate(), 
      price: price, 
      salary: cleaner.salary, 
      duration: building.duration
    }});
  },

  'schedule.cancel'(jobId) {
    check(jobId, String);

    log('@TODO');
    //Jobs.update(jobId, {$set: {done: true}});
  },

  'schedule.addOvertime'(cleanerId, date, overtime) {
    check(cleanerId, String);
    check(date, Date);
    check(overtime, Number);

    const overtimeJob = Jobs.findOne({cleaner_id: cleanerId, date: date, building_id: null});
    if(overtimeJob) {
      Jobs.update(overtimeJob._id, {$inc: {duration: overtime}});
    } else {
      Jobs.insert({
        cleaner_id: cleanerId,
        building_id: null,
        date: date,
        done: true,
        duration: overtime
      });
    }
  },

  'schedule.cancelOvertime'(cleanerId, date) {
    check(cleanerId, String);
    check(date, Date);

    Jobs.remove({cleaner_id: cleanerId, date: date, building_id: null});
  }
});
