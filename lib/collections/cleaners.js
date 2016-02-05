import {Mongo} from 'meteor/mongo';
import Buildings from './buildings.js';
import Schedules from './schedules.js';
import Jobs from './jobs.js';

const Cleaners = new Mongo.Collection('cleaners');

Cleaners.schema = new SimpleSchema({
  name: {type: String},
  salary: {type: Number, decimal: true, min: 0},
  note: {type: String, optional: true}
});

Cleaners.attachSchema(Cleaners.schema);

Cleaners.helpers({
  scheduledBuildings(day) {
    const buildingsIds = Schedules.find({cleaner_id: this._id, day: day}).fetch().map(item => item.building_id);

    return Buildings.find({_id: {$in: buildingsIds}}).fetch();
  },

  jobsForDate(date, done) {
    const selector = {date: date};
    if(done != undefined) selector.done = done;

    return Jobs.find(selector);
  }
});

export default Cleaners;
