export default {
  save({Meteor, FlowRouter}, id, data) {
    data.salary = parseFloat(data.salary);
    Meteor.call('cleaners.save', id, data, (error) => {
      if (error) {
        // ???
      } else {
        FlowRouter.go('cleaners');
      }
    })

  },

  setActive({Meteor, Collections}, id, active = true) {
    Meteor.call('cleaners.setActive', { cleanerId: id, active }, (error) => {
      if (error) console.error(error);
    })
  }
};
