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
    Meteor.call('buildings.setActive', id, active, (error) => {
      if(error) console.error(error);
    });
  }
};
