import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import ScheduleEditor from '../components/scheduleEditor.jsx';

export const composer = ({context}, onData) => {
  const {Collections} = context();

  const cleaners = Collections.Cleaners.find({active: true}, {sort: {name: 1}}).fetch();
  onData(null, {cleaners});
};

export const mapper = (context, actions) => ({
  onAssign: actions.scheduleEditor.assign,
  onUnassign: actions.scheduleEditor.unassign,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(mapper)
)(ScheduleEditor);
