import {Buildings, Cleaners, Schedules, Jobs} from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('core.init', function () {
  return [
    Buildings.find(),
    Cleaners.find(),
    Schedules.find()
  ];
});


Meteor.publish('jobs.todo', function(thisWeek = false) {
  const selector =  {$or: [{done: false}]};
  if(thisWeek) {
    const {from, to} = weekInterval();
    selector['$or'].push({date: {$gte: from.toDate(), $lte: to.toDate()}});
  } else {
    const today = moment({ hour: 0, minute: 0, second: 0 });
    selector['$or'].push({date: today.toDate()});
  }
  return Jobs.find(selector);
});

Meteor.publish('jobs.thisWeek', function() {
  const {from, to} = weekInterval();
  return Jobs.find({date: {$gte: from.toDate(), $lte: to.toDate()}});
});

Meteor.publish('jobs.monthlyReport', function(month) {
	const monthStart = moment(month, 'YYYYMM').startOf('month').toDate();
	const monthEnd = moment(month, 'YYYYMM').endOf('month').toDate();

  return Jobs.find({date: {$gte: monthStart, $lte: monthEnd}, done: true});
});
