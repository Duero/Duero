import {Buildings} from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';

Meteor.methods({
  'buildings.save'(id, data) {
    check(id, Match.OneOf(String, null));
    check(data, {
      name: String,
      duration: Number,
      note: String
    });

    // TODO: Do some user authorization
    if(id) {
      Buildings.update(id, {$set: data});
    } else {
      data.createdAt = new Date();
      Buildings.insert(data);
    }
  }
});
