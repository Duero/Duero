import {Buildings, Cleaners, Schedules} from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish(null, function () {
  return [
    Buildings.find(),
    Cleaners.find(),
    Schedules.find()
  ];
});
