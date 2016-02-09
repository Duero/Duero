export default {
  save({Meteor, FlowRouter}, id, data) {
    data.salary = parseFloat(data.salary);
    Meteor.call('cleaners.save', id, data, (error) => {
      if(error) {
        // ???
      } else {
        FlowRouter.go('cleaners');
      }
    })

  },

  setActive({Collections}, id, active = true) {
    Collections.Cleaners.update(id, {$set: {active}});
  }
};
