import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import Cikautxo from '../components/cikautxo';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();

  if(Meteor.subscribe('cikautxo.init').ready()) {
    onData(null, {});
  }
};


export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Cikautxo);
