import {Mongo} from 'meteor/mongo';

const Schedules = new Mongo.Collection('schedules');

Schedules.schema = new SimpleSchema({
  day: {type: Number, min:1, max:7},
  building_id: {type: String},
  cleaner_id: {type: String},
  order: {type: Number}
});

Schedules.attachSchema(Schedules.schema);


export default Schedules;
