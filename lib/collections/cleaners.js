import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

import Buildings from './buildings.js';
import Schedules from './schedules.js';
import Jobs from './jobs.js';

const Cleaners = new Mongo.Collection('cleaners');

Cleaners.schema = new SimpleSchema({
  name: {type: String},
  salary: {type: Number, min: 0},
  note: {type: String, optional: true},
  active: {type: Boolean, defaultValue: true}
});

Cleaners.attachSchema(Cleaners.schema);

Cleaners.helpers({
  scheduledBuildings(day) {
    const buildings = Schedules.find({cleaner_id: this._id, day: day}, {sort: {createdAt: 1}}).fetch().map(item => {
    	return Buildings.findOne({_id: item.building_id, active: true});
    });

    return buildings;
  },

  jobsForDate(date, done) {
    const selector = {
      cleaner_id: this._id,
      date: date
    };

    if(done != undefined) selector.done = done;

    return Jobs.find(selector, {sort: {description: 1}}).fetch();
  }
});

export default Cleaners;
