import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import Cleaners from '../components/cleaners.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('cleaners.list').ready()) {
    const items = Collections.Cleaners.find().fetch();
    onData(null, {items});
  }
};


export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Cleaners);
