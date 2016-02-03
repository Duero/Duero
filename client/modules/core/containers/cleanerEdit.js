import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import CleanerForm from '../components/cleanerForm.jsx';

export const composer = ({context, cleanerId}, onData) => {
  const {Meteor, Collections, Tracker} = context();

  Meteor.subscribe('cleaner.single', cleanerId, () => {
    const cleaner = Collections.Cleaners.findOne(cleanerId);
    onData(null, {cleaner});
  });
};

export const mapper = (context, actions) => ({
  onSubmit: actions.cleaners.update,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(mapper)
)(CleanerForm);
