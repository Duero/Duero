import {Buildings, Cleaners, Schedules} from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('schedule.all', function () {
  const selector = {};
  const options = {};

  return [
    Buildings.find(),
    Cleaners.find(),
    Schedules.find()
  ];
});
