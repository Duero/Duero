import React from 'react';

import Day from '../containers/day.js';


const ScheduleEditor = ({days, toggleViewText, handleToggle}) => {

  return <div className="schedule schedule-editor">
    <div className="btn btn-default pull-right" onClick={handleToggle}>{toggleViewText}</div>
    {_.map(days, (day, key) => {
      return <Day key={key} {...day} />
    })}
  </div>
};

export default ScheduleEditor;
