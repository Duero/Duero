import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import Cleaners from '../components/cleaners.jsx';

export const composer = ({context}, onData) => {
  const {Collections} = context();
  const items = Collections.Cleaners.find({}, {sort: {name: 1}}).fetch();
  onData(null, {items});
};


export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Cleaners);
