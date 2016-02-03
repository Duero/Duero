export default {
  assign({Meteor, FlowRouter}, parameters) {
    log(parameters);
    Meteor.call('scheduleEditor.assign', parameters, (error) => {
      if(error) {
        // ???
      }
    })

  }
};
