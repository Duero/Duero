import {Mongo} from 'meteor/mongo';
import Buildings from './buildings.js';
import Schedules from './schedules.js';

const Cleaners = new Mongo.Collection('cleaners');

Cleaners.schema = new SimpleSchema({
  name: {type: String},
  salary: {type: Number},
  note: {type: String}
});

Cleaners.attachSchema(Cleaners.schema);

Cleaners.helpers({
  scheduledBuildings(day) {
    const buildingsIds = Schedules.find({cleaner_id: this._id, day: day}).fetch().map(item => item.building_id);

    return Buildings.find({_id: {$in: buildingsIds}}).fetch();
  }
});

export default Cleaners;
