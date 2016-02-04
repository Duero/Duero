import React from 'react';

import Formsy from 'formsy-react';
import {Input, Textarea} from 'formsy-react-components';

const BuildingForm = ({building = {}, onSubmit}) => {

  const defaultValues = {
    name: building.name || '',
    duration: building.duration || '',
    note: building.note || ''
  };

  const handleSubmit = (values) => {
    const id = building._id || null;
    onSubmit(id, values);
  };

  return <div>
    <h1>Objekt</h1>
    <Formsy.Form onSubmit={handleSubmit}>
      <Input name="name" type="text" label="Nazov" value={defaultValues.name} />
      <Input name="duration" type="number" label="Trvanie v min." value={defaultValues.duration} />
      <Textarea name="note" label="Poznamka" value={defaultValues.note} />

      <input className="btn btn-primary btn-lg" type="submit" value="Pridať" />
    </Formsy.Form>
  </div>
};

export default BuildingForm;
