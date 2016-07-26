//import SyncedCron from 'meteor/synced-cron';
import {createJobs} from '../scheduleEditor';

SyncedCron.add({
  name: 'Schedule jobs',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('every 5 min');
  },
  job: function() {
    createJobs();
  }
});


Meteor.startup(function() {
  SyncedCron.start();
  createJobs();
});
