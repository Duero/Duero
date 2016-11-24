import { Cleaners, Schedules, Buildings } from '/lib/collections';
import { Meteor } from 'meteor/meteor';
import { check, Match } from 'meteor/check';

Meteor.methods({
  'cleaners.save'(id, data) {
    check(id, Match.OneOf(String, null));
    check(data, {
      name: String,
      salary: Number,
      note: String
    });

    // TODO: Do some user authorization

    if (id) {
      Cleaners.update(id, { $set: data });
    } else {
      data.createdAt = new Date();
      Cleaners.insert(data);
    }
  },

  'cleaners.setActive'(parameters) {
    check(parameters, {
      cleanerId: String,
      active: Boolean
    });

    // un-assign building
    Schedules.find({ cleaner_id: parameters.cleanerId }).map(s => {
      Buildings.update(s.building_id, {$set: {assigned: false}});
      Schedules.remove(s._id);
    });

    Cleaners.update(parameters.cleanerId, { $set: { active: parameters.active } });
    if (!parameters.active) {
      Meteor.call('schedule.cleanup', { cleaner_id: parameters.cleanerId }, (error) => {
        if (error) console.error(error);
      });
    }
  },
});
