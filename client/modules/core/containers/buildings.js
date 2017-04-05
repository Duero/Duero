import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import Buildings from '../components/buildings.jsx';

export const composer = ({context}, onData) => {
  const {Collections} = context();
  const items = Collections.Buildings.find({}, {sort: {name: 1}}).fetch();
  const cleaners = Collections.Cleaners.find({}, {sort: {name: 1}}).fetch();

  onData(null, {items, cleaners});
};

export const mapper = (context, actions) => ({
  onSetActive: actions.buildings.setActive,
  context: () => context
});


export default composeAll(
  composeWithTracker(composer),
  useDeps(mapper)
)(Buildings);
