import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import MonthlyReport from '../components/monthlyReport.jsx';

export const composer = ({context, cleanerId, month}, onData) => {
  const {Collections} = context();
  const allCleaners = Collections.Cleaners.find({}, {sort: {name: 1}});
  const allMonths = [];

  for (var i = 0; i < 25; i++) {
    allMonths.push({
      value: moment().subtract(i, 'months').format('YYYYMM'),
      name: moment().subtract(i, 'months').format('MMMM YYYY')
    })
  }

  cleanerId = cleanerId || Collections.Cleaners.findOne()._id;
  month = month || moment().format('YYYYMM');

  if(Meteor.subscribe('jobs.monthlyReport', month, cleanerId).ready()) {
    const monthStart = moment(month, 'YYYYMM').startOf('month').toDate();
    const monthEnd = moment(month, 'YYYYMM').endOf('month').toDate();

    const jobs = Collections.Jobs.find({cleaner_id: cleanerId, date: {$gte: monthStart, $lte: monthEnd}}, {sort: {date: 1}}).fetch();
    const cleaner = Collections.Cleaners.findOne(cleanerId);

    const totals = {
      duration: 0,
      price: 0,
      unpaid: 0
    }

    _.each(jobs, function(item) {
      totals.duration += item.duration;
      totals.price += item.price;
      if (item.paid != true) totals.unpaid += item.price;
    });

    onData(null, {jobs, cleaner, allCleaners, allMonths, Collections, totals});
  } else {
    onData(null, {});
  }
};

export const mapper = (context, actions) => ({
  // onSubmit: actions.buildings.save,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(mapper)
)(MonthlyReport);
