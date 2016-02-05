import {Mongo} from 'meteor/mongo';

const Jobs = new Mongo.Collection('jobs');

Jobs.schema = new SimpleSchema({
  date: {type: Date},
  building_id: {type: String},
  cleaner_id: {type: String},
  done: {type: Boolean, defaultValue: false}
});

Jobs.attachSchema(Jobs.schema);


export default Jobs;
