import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import Nav from '../components/nav.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
};


export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Nav);
