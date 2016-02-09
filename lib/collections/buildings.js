import {Mongo} from 'meteor/mongo';

const Buildings = new Mongo.Collection('buildings');

Buildings.schema = new SimpleSchema({
  name: {type: String},
  duration: {type: Number},
  note: {type: String, optional: true},
  assigned: {type: Boolean, defaultValue: false},
  active: {type: Boolean, defaultValue: true}
});

Buildings.attachSchema(Buildings.schema);


Buildings.helpers({
  formattedDuration() {
    return formatMinutes(this.duration);
  }
});

export default Buildings;
