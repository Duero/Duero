import {Cleaners} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
  'cleaners.create'(name, duration, note) {
    check(name, String);
    check(duration, String);
    check(note, String);

    // TODO: Do some user authorization
    const createdAt = new Date();
    const data = {name, duration, note, createdAt};

    Cleaners.insert(data);
  },

  'cleaners.update'(_id, name, duration, note) {
    check(_id, String);
    check(name, String);
    check(duration, String);
    check(note, String);

    // TODO: Do some user authorization
    const data = {name, duration, note};

    Cleaners.update(_id, data);
  }
});
