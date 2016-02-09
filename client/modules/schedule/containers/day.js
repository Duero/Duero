import {useDeps, compose, composeAll} from 'mantra-core';

import Day from '../components/day.jsx';

export const composer = ({context}, onData) => {
  const {Collections} = context();

  const cleaners = Collections.Cleaners.find({active: true}, {sort: {name: 1}}).fetch();

  onData(null, {cleaners});
};

export const mapper = (context, actions) => ({
  onButtonClick: actions.schedule.markAsDone,
  onReassign: actions.schedule.reassign,
  onCancel: actions.schedule.cancel,
  onAddOvertime: actions.schedule.addOvertime,
  onCancelOvertime: actions.schedule.cancelOvertime,
  context: () => context
});

export default composeAll(
  compose(composer),
  useDeps(mapper)
)(Day);
