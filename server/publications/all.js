import {Buildings, Cleaners, Schedules, Jobs} from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish(null, function () {
  return [
    Buildings.find(),
    Cleaners.find(),
    Schedules.find()
  ];
});


Meteor.publish('jobs.todo', function() {
  const today = moment({ hour: 0, minute: 0, second: 0 });
  return Jobs.find({$or: [{done: false}, {date: today.toDate()}]});
});

Meteor.publish('jobs.monthlyReport', function(month, cleanerId) {
	const monthStart = moment(month, 'YYYYMM').startOf('month').toDate();
	const monthEnd = moment(month, 'YYYYMM').endOf('month').toDate();

  return Jobs.find({cleaner_id: cleanerId, date: {$gte: monthStart, $lte: monthEnd}, done: true});
});
