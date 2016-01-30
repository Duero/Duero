import React from 'react';

import CleanerBox from './cleanerBox.jsx';

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


  return <div className="schedule schedule-editor">

    <div className="row">
      <div className="col-xs-6 col-sm-8">
        <h1 className="text-center">Pondelok</h1>
        {cleaners.map((item, index) => {
          return <CleanerBox key={index} {...item} />
        })}
      </div>

      <div className="col-xs-6 col-sm-4 unassigned-buildings">
        <div className="gradient" />
        <div className="building-box">Hradna 9 <span className="duration">(0:30)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
        <div className="building-box">Puskinova 13 <span className="duration">(2:00)</span></div>
      </div>
    </div>

  </div>
};

export default ScheduleEditor;
