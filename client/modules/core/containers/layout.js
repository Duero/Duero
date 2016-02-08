import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import Layout from '../components/layout.jsx';

export const composer = ({context}, onData) => {
  const {Meteor} = context();

  if(Meteor.subscribe('core.init').ready()) {
    onData(null, {});
  }
};


export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Layout);
