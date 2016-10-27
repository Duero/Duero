import {Meteor} from 'meteor/meteor';
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


Migrations.add({
  version: 2,
  name: 'blank',
  up: function() {
  }
});

Migrations.add({
  version: 3,
  name: 'Cleanup jobs',
  up: function() {
    Buildings.find({active: false}).map(b => {
      Meteor.call('schedule.cleanup', {building_id: b._id});
    });

    Cleaners.find({active: false}).map(b => {
      Meteor.call('schedule.cleanup', {cleaner_id: b._id});
    });
  }
});

