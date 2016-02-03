import {Mongo} from 'meteor/mongo';

import Buildings from './buildings.js';
import Cleaners from './cleaners.js';
import Schedules from './schedules.js';

export default {
  Buildings,
  Cleaners,
  Schedules,
  Jobs: new Mongo.Collection('jobs')
};
