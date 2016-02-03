import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import UnassignedBuildings from '../components/unassignedBuildings.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  Meteor.subscribe('buildings.unassigned', () => {
    const buildings = Collections.Buildings.find({assigned: false}).fetch();
    onData(null, {buildings});
  });
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(UnassignedBuildings);
