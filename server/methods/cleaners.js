import {Cleaners} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';

Meteor.methods({
  'cleaners.save'(id, data) {
    check(id, Match.OneOf(String, null));
    check(data, {
      name: String,
      salary: Number,
      note: String
    });

    // TODO: Do some user authorization

    if(id) {
      Cleaners.update(id, {$set: data});
    } else {
      data.createdAt = new Date();
      Cleaners.insert(data);
    }
  }
});
