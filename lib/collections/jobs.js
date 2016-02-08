import {Mongo} from 'meteor/mongo';
import Buildings from './buildings.js';
import Cleaners from './cleaners.js';

const Jobs = new Mongo.Collection('jobs');

Jobs.schema = new SimpleSchema({
  date: {type: Date},
  building_id: {type: String},
  cleaner_id: {type: String},
  salary: {type: Number, decimal: true, optional: true},
  duration: {type: Number, decimal: true, optional: true},
  price: {type: Number, decimal: true, optional: true},
  paid: {type: Boolean, defaultValue: false},
  done: {type: Boolean, defaultValue: false}
});

Jobs.attachSchema(Jobs.schema);


Jobs.helpers({
  building() {
    return Buildings.findOne(this.building_id)
  },

  cleaner() {
    return Cleaners.findOne(this.cleaner_id)
  }
});


export default Jobs;
