export default {
  markAllAsPaid({Meteor, FlowRouter}, cleanerId, month) {
    Meteor.call('jobs.markAllAsPaid', cleanerId, month, (error) => {
      if(error) {
        // ???
      }
    })
  }

};
