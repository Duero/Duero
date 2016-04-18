import {Jobs} from '/lib/collections/index';
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
    Jobs.insert(job);
  },
  'jobs.createJobs'() {
    createJobs();
  }
});
