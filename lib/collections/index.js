import {Mongo} from 'meteor/mongo';

export default {
  Buildings: new Mongo.Collection('buildings'),
  Cleaners: new Mongo.Collection('cleaners'),
  Schedules: new Mongo.Collection('schedules'),
  Jobs: new Mongo.Collection('jobs')
};
