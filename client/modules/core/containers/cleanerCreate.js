import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import CleanerForm from '../components/cleanerForm.jsx';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export const mapper = (context, actions) => ({
  onSubmit: actions.cleaners.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(mapper)
)(CleanerForm);
