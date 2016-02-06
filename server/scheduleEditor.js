import {Buildings, Cleaners, Schedules, Jobs} from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import Weekday from '/lib/weekdays.js';


Meteor.methods({
  'scheduleEditor.assign'(parameters) {
    check(parameters, {
      buildingId: String,
      cleanerId: String,
      day: Number
    });

    // TODO: Do some user authorization

    // un-assign building
    Schedules.remove({building_id: parameters.buildingId});


    const createdAt = new Date();
    const data = {building_id: parameters.buildingId, cleaner_id: parameters.cleanerId, day: parameters.day, createdAt};

    Schedules.insert(data);

    Buildings.update(parameters.buildingId, {$set: {assigned: true}});
  }

});


// create jobs



export function createJobs() {

  const monday = moment({ hour: 0, minute: 0, second: 0 }).weekday(0);
  const sunday = moment({ hour: 0, minute: 0, second: 0 }).weekday(6);

  const selector = {
    $and: [
      {date: {$gte: monday.toDate()}},
      {date: {$lte: sunday.toDate()}}
    ]
  };

  if(Jobs.find(selector).count()) {
    log('This week already scheduled!');
    return null;
  }

  const newJobs = [];
  Weekday.enumValues.map(day => {
    const date = day.date();
    const schedules = Schedules.find({day: day.value}).fetch();

    schedules.map(schedule => {
      const data = {
        building_id: schedule.building_id,
        cleaner_id: schedule.cleaner_id,
        date: date.toDate()
      };

      newJobs.push(Jobs.insert(data));
    });

  });

  log(newJobs.length + ' new Jobs created');
}
