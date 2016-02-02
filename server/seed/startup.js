import {Meteor} from 'meteor/meteor';
import {Buildings, Cleaners} from '/lib/collections';
import faker from 'faker/locale/sk';
import Seed from './Seed.js';

Meteor.startup(function() {

  faker.locale = "sk";

  Seed('Buildings init', Buildings, {
    max: 70,
    data(index) {
      return {
        name: faker.address.streetAddress(),
        duration: _.sample([30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]),
        note: faker.lorem.sentence(10)
      }
    }
  });

  Seed('Cleaners init', Cleaners, {
    max: 6,
    data(index) {
      return {
        name: faker.name.firstName(1) + ' ' + faker.name.lastName(1),
        hourlyRate: _.sample([2, 2.2, 2.5, 2.7, 3])
      }
    }
  });

});
