import {useDeps, composeWithTracker, composeAll} from 'mantra-core';


import Weekday from '/lib/weekdays.js';
import Schedule from '../components/schedule.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  const today = moment({ hour: 0, minute: 0, second: 0 });
  const getDayKey = (date) => (date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay());

  if(Meteor.subscribe('jobs.todo').ready()) {
    let days = {};
    Collections.Jobs.find({done: false, date: {$lt: today.toDate()}}, {sort: {date: 1}}).forEach(job => {
      const jobDate = job.date;
      const dayKey = getDayKey(jobDate);

      if(!days[dayKey]) {
        const date = moment(jobDate);
        const isOverdue = date.isBefore(moment());
        days[dayKey] = {date, isToday: false, isOverdue};
      }
    });

    days = _.values(days);
    days = _.sortBy(days, 'date');

    days.push({
      date: today,
      isToday: true,
      isOverdue: moment({ hour: 15, minute: 0, second: 0 }).isBefore(moment())
    });

    onData(null, {days});
  }
};

//export const mapper = (context, actions) => ({
//  onAssign: actions.scheduleEditor.assign,
//  context: () => context
//});

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Schedule);
