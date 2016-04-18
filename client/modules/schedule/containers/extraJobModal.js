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
  
  cleaners = cleaners.map(function(item, index) {
     return { value: item._id, label: item.name }
  })
  
  onData(null, {defaultValues, buildings, cleaners});
};

export const mapper = (context, actions) => ({
  onButtonClick: (values) => {
    values.date = moment(values.date).toDate();
    actions.schedule.addExtraJob(context, values);
  },
  context: () => context
});

export default composeAll(
  compose(composer),
  useDeps(mapper)
)(ExtraJobModal);
