import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import MonthlyReport from '../components/monthlyReport.jsx';

export const composer = ({context, cleanerId, month}, onData) => {
  const {Collections} = context();
  const allCleaners = Collections.Cleaners.find({}, {sort: {name: 1}});

  const monthsStart = moment("2016-01-01 0:00 +0000", "YYYY-MM-DD HH:mm Z");
  const currentMonth = moment({day: 0, hour: 0, minute: 0, second: 0});
  const monthsDiff = currentMonth.diff(monthsStart, 'months');
  const allMonths = [];
  for (var i = 0; i <= monthsDiff; i++) {
    allMonths.push({
      value: moment(currentMonth).subtract(i, 'months').format('YYYYMM'),
      name: moment(currentMonth).subtract(i, 'months').format('MMMM YYYY')
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
    };

    _.each(jobs, function(item) {
      totals.duration += item.duration;
      const thisPrice = item.duration / 60 * item.salary
      totals.price += thisPrice;
      if (item.paid != true) totals.unpaid += thisPrice;
    });

    onData(null, {jobs, month, cleaner, allCleaners, allMonths, Collections, totals});
  }
};

export const mapper = (context, actions) => ({
  onMarkAllAsPaid: actions.monthlyReport.markAllAsPaid,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(mapper)
)(MonthlyReport);
