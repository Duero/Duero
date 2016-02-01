import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import BuildingForm from '../components/buildingForm.jsx';

export const composer = ({context, buildingId}, onData) => {
  const {Meteor, Collections, Tracker} = context();

  Meteor.subscribe('buildings.single', buildingId, () => {
    const building = Collections.Buildings.findOne(buildingId);
    onData(null, {building});
  });
};

export const mapper = (context, actions) => ({
  onSubmit: actions.buildings.update,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(mapper)
)(BuildingForm);
