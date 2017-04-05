export default {
  save({Meteor, FlowRouter}, id, data) {
    data.duration = parseInt(data.duration);

    Meteor.call('buildings.save', id, data, (error) => {
      if(error) {
        // ???
      } else {
        FlowRouter.go('buildings');
      }
    })

  },

  setActive({Collections, Meteor}, id, active = true) {
    Collections.Buildings.update(id, {$set: {active}});
    if(!active) {
      Meteor.call('schedule.cleanup', {building_id: id}, (error) => {
        if(error) console.error(error);
      });
      Meteor.call('scheduleEditor.unassign', {buildingId: id}, (error) => {
        if(error) console.error(error);
      });
    }
  },

  bigCleaning({Collections}, id) {
    Collections.Buildings.update(id, {$set: {bigCleaning: new Date}});
  },
};
