import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import MonthlyReport from '../components/monthlyReport.jsx';

export const composer = ({context, cleanerId, month}, onData) => {
  const {Collections} = context();

  if(cleanerId && month) {
    const monthStart = moment(month, 'YYYYMM').startOf('month').toDate();
    const monthEnd = moment(month, 'YYYYMM').endOf('month').toDate();

    const jobs = Collections.Jobs.find({cleaner_id: cleanerId, date: {$gte: monthStart, $lte: monthEnd}}, {sort: {date: 1}}).fetch();
    const cleaner = Collections.Cleaners.findOne(cleanerId);

    onData(null, {jobs, cleaner, Collections});
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
