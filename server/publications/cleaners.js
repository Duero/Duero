import {Cleaners} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('cleaners.list', function () {
  const selector = {};
  const options = {
    sort: {createdAt: -1}
  };

  return Cleaners.find(selector, options);
});

Meteor.publish('cleaners.single', function (id) {
  check(id, String);

  const selector = id;
  const options = {};

  return Cleaners.find(selector, options);
});
