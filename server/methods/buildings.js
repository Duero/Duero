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
  },

  'buildings.setActive'(id, active) {
    check(id, Match.OneOf(String, null));
    active = !!active;

    Buildings.update(id, {$set: {active}});
    if(!active) {
      Meteor.call('schedule.cleanup', {building_id: id});
      Meteor.call('scheduleEditor.unassign', {buildingId: id});
    }
  }
});
