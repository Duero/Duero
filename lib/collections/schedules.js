import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Schedules = new Mongo.Collection('schedules');

Schedules.schema = new SimpleSchema({
  day: {type: Number, min:1, max:7},
  building_id: {type: String},
  cleaner_id: {type: String},
  createdAt: {type: Date}
});

Schedules.attachSchema(Schedules.schema);


export default Schedules;
