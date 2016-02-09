import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import UnassignedBuildings from '../components/unassignedBuildings.jsx';

export const composer = ({context}, onData) => {
  const {Collections} = context();

  const buildings = Collections.Buildings.find({assigned: false, active: true}).fetch();
  onData(null, {buildings});
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(UnassignedBuildings);
