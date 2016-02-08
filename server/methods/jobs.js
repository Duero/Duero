import {Jobs} from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';

Meteor.methods({
  'jobs.markAllAsPaid'(cleanerId, month) {
    check(id, String);
    check(month, String);

    log(cleanerId, month); return false;

    const monthStart = moment(month, 'YYYYMM').startOf('month').toDate();
    const monthEnd = moment(month, 'YYYYMM').endOf('month').toDate();

    const jobs = Jobs.update({cleaner_id: cleanerId, date: {$gte: monthStart, $lte: monthEnd}}, {multi: true});
  }
});
