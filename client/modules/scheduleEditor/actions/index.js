export default {
  assign({Meteor, FlowRouter}, parameters) {
    Meteor.call('scheduleEditor.assign', parameters, (error) => {
      if(error) {
        // ???
      }
    })

  },
  unassign({Meteor, FlowRouter}, parameters) {
    Meteor.call('scheduleEditor.unassign', parameters, (error) => {
      if(error) {
        // ???
      }
    })

  }
};
