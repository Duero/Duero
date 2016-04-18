import {useDeps, compose, composeAll} from 'mantra-core';

import ExtraJobModal from '../components/extraJobModal.jsx';

export const composer = ({context}, onData) => {
  const {Collections} = context();

  let buildings = Collections.Buildings.find({active: true}, {sort: {name: 1}}).fetch();
  let cleaners = Collections.Cleaners.find({active: true}, {sort: {name: 1}}).fetch();
  const defaultValues = {};

  buildings = buildings.map(function(item, index) {
     return { value: item._id, label: item.name }
  })

  buildings.unshift({ value: '', label: ' ~ Vyber ~' })
  
  cleaners = cleaners.map(function(item, index) {
     return { value: item._id, label: item.name }
  })
  cleaners.unshift({ value: '', label: ' ~ Vyber ~' })
  
  onData(null, {defaultValues, buildings, cleaners});
};

export const mapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  compose(composer),
  useDeps(mapper)
)(ExtraJobModal);
