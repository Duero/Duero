import React from 'react';

import ScheduleEditorComponent from '/client/modules/scheduleEditor/components/scheduleEditor.jsx';

const ScheduleEditor = () => {

  const cleaners = [];
  return <ScheduleEditorComponent cleaners={cleaners} />
};

export default ScheduleEditor;
