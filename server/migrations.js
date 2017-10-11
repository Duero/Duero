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


Migrations.add({
  version: 4,
  name: 'Reactivate hidden buildings',
  up: function() {
    Buildings.find({assigned: true}).map(b => {
      if(Schedules.find({building_id: b._id}).count() === 0) {
        Buildings.update(b._id, {$set: {assigned: false}});
      }
    });

  }
});

Migrations.add({
  version: 5,
  name: 'cleanup',
  up: function() {
    Meteor.call('schedule.cleanupAll');
  }
});

Migrations.add({
  version: 6,
  up: function() {
    Meteor.call('schedule.cleanupAll');
  }
});

Migrations.add({
  version: 7,
  up: function() {
    Buildings.find({bigCleaning: {$exists: true}}).map(b => {
      Buildings.update(b._id, {$unset: {bigCleaning: ''}});
      console.log('unset: ', b.id)
    });

    Jobs.find({bigCleaning: true}).map(j => {
      Buildings.update(j.building_id, {$set: {bigCleaning: j.date}})
      console.log('set: ', j.building_id)
    })
  }
});

