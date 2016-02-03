import {Cleaners} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.methods({
  'cleaners.create'(name, salary, note) {
    check(name, String);
    check(salary, String);
    check(note, String);

    // TODO: Do some user authorization
    const createdAt = new Date();
    const data = {name, salary, note, createdAt};

    Cleaners.insert(data);
  },

  'cleaners.update'(_id, name, salary, note) {
    check(_id, String);
    check(name, String);
    check(salary, Number);
    check(note, String);

    // TODO: Do some user authorization
    const data = {name, salary, note};
    log(data)
    Cleaners.update(_id, {$set: data});
  }
});
