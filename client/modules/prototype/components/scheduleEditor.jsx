import React from 'react';

import ScheduleEditorComponent from '/client/modules/scheduleEditor/components/scheduleEditor.jsx';

const ScheduleEditor = () => {

  const cleaners = [
    {
      cleaner: {name: 'Hanka S.'},
      buildings: [
        {name: 'Dlha 2', duration: '4:30'},
        {name: 'Mlinska d. 5', duration: '2:10'},
        {name: 'Hradna 134', duration: '0:45'}
      ]
    },

    {
      cleaner: {name: 'Magda V.'},
      buildings: [
        {name: 'Hlavna 42', duration: '7:30'}
      ]
    },

    {
      cleaner: {name: 'Eva P.'},
      buildings: []
    }

  ];


  return <ScheduleEditorComponent cleaners={cleaners} />
};

export default ScheduleEditor;
