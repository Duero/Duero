import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import Buildings from './buildings.js';
import Cleaners from './cleaners.js';

const Jobs = new Mongo.Collection('jobs');

Jobs.schema = new SimpleSchema({
  date: {type: Date},
  building_id: {type: String, optional: true},
  cleaner_id: {type: String},
  salary: {type: Number, optional: true},
  duration: {type: Number, optional: true},
  price: {type: Number, optional: true},
  description: {type: String, optional: true},
  bigCleaning: {type: Boolean, optional: true, defaultValue: false},
  paid: {type: Boolean, defaultValue: false},
  done: {type: Boolean, defaultValue: false}
});

Jobs.attachSchema(Jobs.schema);


Jobs.helpers({
  building() {
    return Buildings.findOne(this.building_id);
  },

  title() {
    if(!this.building_id) return formatMinutes(this.duration);
    else return this.building().name;
  },
  cleaner() {
    return Cleaners.findOne(this.cleaner_id)
  },

  estimatedDuration() {
    const duration = this.duration || 0;

    if(!duration) {
      const building = this.building();
      return building ? building.duration : 0;
    }

    return duration;
  },

  isExtra() {
    return this.description && this.description.length > 0;
  },

  isOvertime() {
    return !this.building_id;
  }
});


export default Jobs;
