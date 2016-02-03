import {Buildings} from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
  'buildings.create'(name, duration, note) {
    check(name, String);
    check(duration, String);
    check(note, String);

    // TODO: Do some user authorization
    const createdAt = new Date();
    const data = {name, duration, note, createdAt};

    Buildings.insert(data);
  },

  'buildings.update'(_id, name, duration, note) {
    check(_id, String);
    check(name, String);
    check(duration, String);
    check(note, String);

    // TODO: Do some user authorization
    const data = {name, duration, note};

    Buildings.update(_id, data);
  }
});
