import React from 'react';


import Weekday from '/lib/weekdays.js';
import CleanerBox from './cleanerBox.jsx';
import UnassignedBuildings from '../containers/unassignedBuildings.js';

const ScheduleEditor = ({cleaners, onAssign, onUnassign}) => {

  const daysDom = Weekday.enumValues.map(day => {
    return <div key={day.value}>
      <h1 className="text-center">{day.label}</h1>
      {cleaners.map(cleaner => {
        return <CleanerBox key={cleaner._id} cleaner={cleaner} buildings={cleaner.scheduledBuildings(day.value)} day={day} onAssign={onAssign}  />
      })}
    </div>
  });

  return <div className="schedule schedule-editor">
    <div className="row">
      <div className="col-xs-6 col-sm-8 col-md-9">
        {daysDom}
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3">
        <UnassignedBuildings onUnassign={onUnassign} />
      </div>
    </div>
  </div>
};

export default ScheduleEditor;
