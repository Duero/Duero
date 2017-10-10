import {Buildings, Cleaners, Schedules, Jobs} from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('cikautxo.init', function () {
  const buildings = Buildings.find({name: {$regex: 'Cikautxo.*'}});
  const cleaners = Cleaners.find({name: {$regex: 'Cikautxo.*'}});

  const buildingsIds = buildings.map(b => b._id);
  const cleanersIds = cleaners.map(b => b._id);

  return [
    buildings,
    cleaners,
    Jobs.find({
      building_id: {$in: buildingsIds},
      cleaner_id: {$in: cleanersIds},
    })
  ];
});