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
