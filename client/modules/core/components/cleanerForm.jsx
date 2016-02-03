import React from 'react';

import Formsy from 'formsy-react';
import {Input, Textarea} from 'formsy-react-components';

const CleanerForm = ({cleaner = {}, onSubmit}) => {

  const defaultValues = {
    name: cleaner.name || '',
    salary: cleaner.salary || 0,
    note: cleaner.note || ''
  };

  const handleSubmit = (values) => {
    if(cleaner._id) {
      onSubmit(cleaner._id, values);
    } else {
      onSubmit(values);
    }
  };

  return <div>
    <h1>Upratovačka</h1>
    <Formsy.Form onSubmit={handleSubmit}>
      <Input name="name" type="text" label="Meno" value={defaultValues.name} />
      <Input name="salary" type="text" label="Hodinovka"  value={defaultValues.salary}  validations="isFloat"/>
      <Textarea name="note" label="Poznámka" value={defaultValues.note} />

      <input className="btn btn-primary btn-lg" type="submit" value="Pridať" />
    </Formsy.Form>
  </div>
};

export default CleanerForm;
