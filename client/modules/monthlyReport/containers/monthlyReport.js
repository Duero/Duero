import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import MonthlyReport from '../components/monthlyReport.jsx';

export const composer = ({context, cleanerId, month, buildingId, search}, onData) => {
  const {Collections} = context();
  const allCleaners = Collections.Cleaners.find({}, {sort: {name: 1}});
  const allBuildings = Collections.Buildings.find({}, {sort: {name: 1}});

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

  // cleanerId = cleanerId || Collections.Cleaners.findOne()._id;
  month = month || moment().format('YYYYMM');

  if(Meteor.subscribe('jobs.monthlyReport', month).ready()) {
    const monthStart = moment(month, 'YYYYMM').startOf('month').toDate();
    const monthEnd = moment(month, 'YYYYMM').endOf('month').toDate();

    const jobsSelector = {date: {$gte: monthStart, $lte: monthEnd}};

    if (cleanerId) jobsSelector.cleaner_id = cleanerId;
    if (buildingId) jobsSelector.building_id = buildingId;
    if (search) jobsSelector.description = {$regex : `.*${search}.*`};

    const jobs = Collections.Jobs.find(jobsSelector, {sort: {date: 1}}).fetch();

    const cleaner = Collections.Cleaners.findOne(cleanerId);
    const building = Collections.Buildings.findOne(buildingId);

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

    totals.price = roundTo(totals.price, 2);
    totals.unpaid = roundTo(totals.unpaid, 2);

    onData(null, {jobs, search, month, cleaner, allCleaners, allMonths, Collections, totals, building, allBuildings});

  }
};

export const mapper = (context, actions) => ({
  onMarkAllAsPaid: actions.monthlyReport.markAllAsPaid,
  handleSearch: () => {
    const route = context.FlowRouter._current;
    const newSearch = prompt("Filtrovat popis", route.params.search);

    context.FlowRouter.setParams({search: newSearch});
  },
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(mapper)
)(MonthlyReport);
