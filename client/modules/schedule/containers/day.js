import {useDeps, compose, composeAll} from 'mantra-core';

import Day from '../components/day.jsx';

export const composer = ({context}, onData) => {
  const {Collections} = context();

  const cleaners = Collections.Cleaners.find().fetch();

  onData(null, {cleaners});
};

export const mapper = (context, actions) => ({
  onButtonClick: actions.schedule.markAsDone,
  onReassign: actions.schedule.reassign,
  onCancel: actions.schedule.cancel,
  context: () => context
});

export default composeAll(
  compose(composer),
  useDeps(mapper)
)(Day);
