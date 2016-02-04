import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import CleanerForm from '../components/cleanerForm.jsx';

export const composer = ({context, cleanerId}, onData) => {
  const {Collections} = context();

  if(cleanerId) {
    const cleaner = Collections.Cleaners.findOne(cleanerId);
    onData(null, {cleaner});
  } else {
    onData(null, {});
  }
};

export const mapper = (context, actions) => ({
  onSubmit: actions.cleaners.save,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(mapper)
)(CleanerForm);
