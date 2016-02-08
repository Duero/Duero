export default {
  markAllAsPaid({Meteor, FlowRouter}, cleanerId, month) {
    Meteor.call('jobs.markAllAsPaid', job._id, (error) => {
      if(error) {
        // ???
      }
    })
  }

};
