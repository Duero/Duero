import {Jobs, Cleaners, Buildings} from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';
import {createJobs} from '../scheduleEditor';

Meteor.methods({
  'jobs.markAllAsPaid'(cleanerId, month) {
    check(cleanerId, String);
    check(month, String);

    const monthStart = moment(month, 'YYYYMM').startOf('month').toDate();
    const monthEnd = moment(month, 'YYYYMM').endOf('month').toDate();

    Jobs.update(
      {cleaner_id: cleanerId, date: {$gte: monthStart, $lte: monthEnd}},
      {$set: {paid: true}},
      {multi: true}
    );
  },
  'jobs.addExtraJob'(job) {
    log(job)
    check(job.cleaner_id, String);
    check(job.building_id, String);
    check(job.duration, Number);
    check(job.description, String);
    check(job.bigCleaning, Boolean);
    check(job.date, Date);

    job.salary = Cleaners.findOne(job.cleaner_id).salary;
    job.done = true;

    Jobs.insert(job);
    if(job.bigCleaning) {
      Buildings.update(job.building_id, {$set: {bigCleaning: new Date}});
    }
  },
  'jobs.createJobs'() {
    createJobs();
  }
});
