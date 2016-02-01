import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import BuildingForm from '../components/buildingForm.jsx';

export const composer = ({context}, onData) => {
  onData(null, {});
};

export const mapper = (context, actions) => ({
  onSubmit: actions.buildings.create,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(mapper)
)(BuildingForm);
