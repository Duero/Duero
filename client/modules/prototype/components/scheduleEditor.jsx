import React from 'react';

const ScheduleEditor = () => {
  return <div className="schedule schedule-editor">
    <h1 className="text-center">Pondelok</h1>

    <div className="cleaner-box">
      <div className="name">Helena F.</div>
      <div className="buildings">
        <div className="building-box">L. Stura 8 <span className="duration">(2:00)</span></div>
        <div className="building-box">Hradna 12 <span className="duration">(1:20)</span></div>
        <div className="building-box">Pod kopcom 84 <span className="duration">(2:45)</span></div>
      </div>
      <div className="btn btn-link pull-right"><i className="fa fa-plus" /></div>
    </div>

    <div className="cleaner-box">
      <div className="name">Magda H.</div>
      <div className="buildings">
        <div className="building-box">Dlha 2 <span className="duration">(4:30)</span></div>
        <div className="building-box">Kosicka 14 <span className="duration">(2:20)</span></div>
      </div>
      <div className="btn btn-link pull-right"><i className="fa fa-plus" /></div>
    </div>

  </div>
};

export default ScheduleEditor;
