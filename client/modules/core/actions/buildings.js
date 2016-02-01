export default {
  create({Meteor, FlowRouter}, {name, duration, note}) {
    Meteor.call('buildings.create', name, duration, note, (error) => {
      if(error) {
        // ???
      } else {
        FlowRouter.go('buildings');
      }
    })

  },

  update({Meteor, FlowRouter}, _id, {name, duration, note}) {
    Meteor.call('buildings.update', _id, name, duration, note, (error) => {
      if(error) {
        // ???
      } else {
        FlowRouter.go('buildings');
      }
    })

  }
};
