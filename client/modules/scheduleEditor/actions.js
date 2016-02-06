export default {
  assign({Meteor, FlowRouter}, parameters) {
    Meteor.call('scheduleEditor.assign', parameters, (error) => {
      if(error) {
        // ???
      }
    })
  }
};
