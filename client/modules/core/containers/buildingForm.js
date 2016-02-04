import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import BuildingForm from '../components/buildingForm.jsx';

export const composer = ({context, buildingId}, onData) => {
  const {Collections} = context();

  if(buildingId) {
    const building = Collections.Buildings.findOne(buildingId);
    onData(null, {building});
  } else {
    onData(null, {});
  }
};

export const mapper = (context, actions) => ({
  onSubmit: actions.buildings.save,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(mapper)
)(BuildingForm);
