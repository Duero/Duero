import {Buildings} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('buildings.list', function () {
  const selector = {};
  const options = {
    sort: {createdAt: -1}
  };

  return Buildings.find(selector, options);
});

Meteor.publish('buildings.single', function (id) {
  check(id, String);

  const selector = id;
  const options = {};

  return Buildings.find(selector, options);
});
