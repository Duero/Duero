import {Mongo} from 'meteor/mongo';

const Buildings = new Mongo.Collection('buildings');

Buildings.schema = new SimpleSchema({
  name: {type: String},
  duration: {type: Number},
  note: {type: String},
  assigned: {type: Boolean, defaultValue: false}
});

Buildings.attachSchema(Buildings.schema);


Buildings.helpers({
  formattedDuration() {
    var hours = Math.floor( this.duration / 60);
    var minutes = this.duration % 60;

    return `${hours}:${minutes}`;
  }
});

export default Buildings;
