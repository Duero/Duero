//import SyncedCron from 'meteor/synced-cron';
// import {createJobs} from '../scheduleEditor';

SyncedCron.add({
  name: 'Schedule jobs',
  schedule: function(parser) {
    // parser is a later.parse object
    return parser.text('on Monday at 0:01');
  },
  job: function() {
    createJobs();
  }
});


Meteor.startup(function() {
  SyncedCron.start();
});
