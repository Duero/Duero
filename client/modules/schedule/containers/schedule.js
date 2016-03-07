import {useDeps, composeWithTracker, compose, composeAll} from 'mantra-core';


import Weekday from '/lib/weekdays.js';
import Schedule from '../components/schedule.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();


  const viewAll = LocalState.get('SCHEDULE_VIEW_ALL');
  const today = moment({ hour: 0, minute: 0, second: 0 });
  const getDayKey = (date) => (date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay());
  if(Meteor.subscribe('jobs.todo', viewAll).ready()) {
    let days = {};
    let to = null;
    const selection = {};
    if(viewAll) {
      const week = weekInterval();
      to = week.to;
    } else {
      selection.done = false;
      to = today;
    }
    selection.date = {$lte: to.toDate()};
    Collections.Jobs.find(selection, {sort: {date: 1}}).forEach(job => {
      const jobDate = job.date;
      const dayKey = getDayKey(jobDate);

      if(!days[dayKey]) {
        const date = moment(jobDate);
        const isToday = date.isSame(today, 'day');
        const isOverdue = isToday ? moment({ hour: 15, minute: 0, second: 0 }).isBefore(moment()) : date.isBefore(moment());
        days[dayKey] = {date, isToday, isOverdue};
      }
    });

    days = _.values(days);
    days = _.sortBy(days, 'date');

    const toggleViewText = viewAll ? 'Zobraz aktuálne' : 'Zobraz všetko';
    onData(null, {days, viewAll, toggleViewText});
  }
};


export const mapper = (context, actions) => ({
  handleToggle() {
    const state = context.LocalState;
    state.set('SCHEDULE_VIEW_ALL', !state.get('SCHEDULE_VIEW_ALL'));
  },
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(mapper)
)(Schedule);
