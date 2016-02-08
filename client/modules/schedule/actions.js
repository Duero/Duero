export default {
  markAsDone({Meteor, FlowRouter}, job) {
    Meteor.call('schedule.markAsDone', job._id, (error) => {
      if(error) {
        // ???
      }
    })
  },

  reassign({Meteor, FlowRouter}, job, cleaner) {
    Meteor.call('schedule.reassign', job._id, cleaner._id, (error) => {
      if(error) {
        // ???
      }
    })
  },

  cancel({Meteor, FlowRouter}, job) {
    Meteor.call('schedule.cancel', job._id, (error) => {
      if(error) {
        // ???
      }
    })
  },

  addOvertime({Meteor, FlowRouter}, cleaner, date, overtime) {
    Meteor.call('schedule.addOvertime', cleaner._id, date, overtime, (error) => {
      if(error) {
        // ???
      }
    })
  },

  cancelOvertime({Meteor, FlowRouter}, cleaner, date) {
    Meteor.call('schedule.cancelOvertime', cleaner._id, date, (error) => {
      if(error) {
        // ???
      }
    })
  }
};
