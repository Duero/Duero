import {Buildings, Cleaners, Schedules, Jobs} from '/lib/collections/index';


Meteor.startup(function() {
  Migrations.migrateTo('latest');
});


Migrations.add({
  version: 1,
  name: 'Add `active` field to Buildings and Cleaners',
  up: function() {
    Buildings.update({}, {$set: {active: true}}, {multi: true});
    Cleaners.update({}, {$set: {active: true}}, {multi: true});
  }
});

