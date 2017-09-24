import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Buildings = new Mongo.Collection('buildings');

Buildings.schema = new SimpleSchema({
  name: {type: String},
  duration: {type: Number, defaultValue: 0},
  note: {type: String, optional: true},
  assigned: {type: Boolean, defaultValue: false},
  active: {type: Boolean, defaultValue: true},
  bigCleaning: {type: Date, defaultValue: null, optional: true}
});

Buildings.attachSchema(Buildings.schema);


Buildings.helpers({
  formattedDuration() {
    return formatMinutes(this.duration);
  },

  bigCleaningFormatted() {
    return this.bigCleaning ? moment(this.bigCleaning).format('D.M. YY') : null;
  },

  lastBigCleaning() {
    return this.bigCleaning ? moment(this.bigCleaning) : moment('2011-01-01');
  }
});

export default Buildings;
