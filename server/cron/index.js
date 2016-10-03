//import SyncedCron from 'meteor/synced-cron';
import {createJobs} from '../scheduleEditor';

SyncedCron.add({
  name: 'Schedule jobs',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('at 1:00 am on Monday');
  },
  job: function() {
    createJobs();
  }
});


Meteor.startup(function() {
  SyncedCron.start();
  //createJobs();
});
