import {Buildings, Cleaners, Schedules, Jobs} from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
  'schedule.markAsDone'(jobId) {
    check(jobId, String);

    Jobs.update(jobId, {$set: {done: true}});
  },

  'schedule.reassign'(jobId, cleanerId) {
    check(jobId, String);
    check(cleanerId, String);

    const today = moment({ hour: 0, minute: 0, second: 0 });
    Jobs.update(jobId, {$set: {cleaner_id: cleanerId, date: today.toDate()}});
  },

  'schedule.cancel'(jobId) {
    check(jobId, String);

    log('@TODO');
    //Jobs.update(jobId, {$set: {done: true}});
  }
});
