import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import {map, orderBy, endsWith} from 'lodash';

import MonthlyReport from '../components/monthlyReport.jsx';

const toUrl = string => string.split('/').map(encodeURI).join('~');
const fromUrl = string => string.split('~').map(decodeURI).join('/');
const fakeEntity = (slug) => ({
  fake: true,
  active: true,
  _id: toUrl(slug),
  name: slug + ' *'
});

const joinNames = list => {
  const bucket = {};
  list.forEach(row => {
    const name = row.name || '';
    if(name.includes('/')) {
      const nameParts = name.split('/');
      nameParts.pop();
      nameParts.reduce((accumulator, currentValue) => {
        accumulator += currentValue + '/';

        bucket[accumulator] = true;
        return accumulator;
      }, '');
    }
  });

  return bucket;
};

export const composer = ({context, urlPrefix, cleanerId, month, buildingId, search}, onData) => {
  const isAdmin = !urlPrefix;
  cleanerId = cleanerId ? fromUrl(cleanerId) : null;
  buildingId = buildingId ? fromUrl(buildingId) : null;
  const {Collections} = context();

  // ---- cleaners -----
  const cleaners = Collections.Cleaners.find({}, {sort: {active: -1, name: 1}}).fetch();
  const fakeCleaners = joinNames(cleaners);
  map(fakeCleaners, (_, slug) => cleaners.push(fakeEntity(slug)));
  const allCleaners = orderBy(cleaners, 'name');

  // ---- buildings -----
  const buildings = Collections.Buildings.find({}, {sort: {active: -1, name: 1}}).fetch();
  const fakeBuildings = joinNames(buildings);
  map(fakeBuildings, (_, slug) => buildings.push(fakeEntity(slug)));
  const allBuildings = orderBy(buildings, 'name');

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
    if(!isAdmin) jobsSelector.building_id = {$in: buildings.map(v => v._id)};
    if(!isAdmin) jobsSelector.cleaner_id = {$in: cleaners.map(v => v._id)};

    if (cleanerId) {
      if(endsWith(cleanerId, '/')) {
        const group = Collections.Cleaners.find({name: {$regex: cleanerId + '.*'}}).fetch();
        jobsSelector.cleaner_id = {$in: group.map(v => v._id)}
      } else jobsSelector.cleaner_id = cleanerId;
    }
    if (buildingId) {
      if(endsWith(buildingId, '/')) {
        const group = Collections.Buildings.find({name: {$regex: buildingId + '.*'}}).fetch();
        jobsSelector.building_id = {$in: group.map(v => v._id)}
      } else jobsSelector.building_id = buildingId;
    }

    if (search) jobsSelector.description = {$regex : `.*${search}.*`};

    const jobs = Collections.Jobs.find(jobsSelector, {sort: {date: 1}}).fetch();

    const cleaner = endsWith(cleanerId, '/') ? fakeEntity(cleanerId) : Collections.Cleaners.findOne(cleanerId) || {};
    const building = endsWith(buildingId, '/') ? fakeEntity(buildingId) : Collections.Buildings.findOne(buildingId) || {};

    const totals = {
      duration: 0,
      price: 0,
      unpaid: 0
    };

    _.each(jobs, function(item) {
      totals.duration += item.duration;
      const thisPrice = item.duration / 60 * item.salary
      totals.price += thisPrice;
      if (item.paid !== true) totals.unpaid += thisPrice;
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
