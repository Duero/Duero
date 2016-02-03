export default {
  create({Meteor, FlowRouter}, {name, salary, note}) {
    Meteor.call('cleaners.create', name, salary, note, (error) => {
      if(error) {
        // ???
      } else {
        FlowRouter.go('cleaners');
      }
    })

  },

  update({Meteor, FlowRouter}, _id, {name, salary, note}) {
    Meteor.call('cleaners.update', _id, name, salary, note, (error) => {
      if(error) {
        // ???
      } else {
        FlowRouter.go('cleaners');
      }
    })

  }
};
