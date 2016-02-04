import {Buildings, Cleaners, Schedules} from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
  'scheduleEditor.assign'(parameters) {
    check(parameters, {
      buildingId: String,
      cleanerId: String,
      day: Number
    });

    // TODO: Do some user authorization

    const createdAt = new Date();
    const data = {building_id: parameters.buildingId, cleaner_id: parameters.cleanerId, day: parameters.day, createdAt};

    Schedules.insert(data);

    Buildings.update(parameters.buildingId, {$set: {assigned: true}});
  },
  'scheduleEditor.unassign'(parameters) {
    check(parameters, {
      cleanerId: String
    });

    // TODO: Do some user authorization

    const data = {cleaner_id: parameters.cleanerId};
    const thisSchedule = Schedules.findOne(data);
    Schedules.remove(data);

    Buildings.update(thisSchedule.building_id, {$set: {assigned: false}});
  }

});
