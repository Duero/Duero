import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import Buildings from '../components/buildings.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('buildings.list').ready()) {
    const items = Collections.Buildings.find().fetch();
    onData(null, {items});
  }
};


export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Buildings);