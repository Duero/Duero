import {useDeps, compose, composeAll} from 'mantra-core';

import ScheduleEditor from '../components/scheduleEditor.jsx';

export const composer = ({context}, onData) => {
  onData(null, null);
};

export default composeAll(
  compose(composer),
  useDeps()
)(ScheduleEditor);
