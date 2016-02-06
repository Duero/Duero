import React from 'react';

import Day from '../containers/day.js';


const ScheduleEditor = ({days}) => {

  return <div className="schedule schedule-editor">
    {_.map(days, (day, key) => {
      return <Day key={key} {...day} />
    })}
  </div>
};

export default ScheduleEditor;
