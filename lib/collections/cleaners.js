import {Mongo} from 'meteor/mongo';
import Buildings from './buildings.js';
import Schedules from './schedules.js';

const Cleaners = new Mongo.Collection('cleaners');

Cleaners.schema = new SimpleSchema({
  name: {type: String},
  salary: {type: Number, decimal: true, min: 0},
  note: {type: String, optional: true}
});

Cleaners.attachSchema(Cleaners.schema);

Cleaners.helpers({
  scheduledBuildings(day) {
    const buildings = Schedules.find({cleaner_id: this._id, day: day}, {sort: {createdAt: 1}}).fetch().map(item => {
    	return Buildings.findOne({_id: item.building_id});
    });

    return buildings;
  }
});

export default Cleaners;
