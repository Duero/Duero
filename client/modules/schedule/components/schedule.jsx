import React from 'react';

import Day from '../containers/day.js';
import ExtraJobModal from '../containers/extraJobModal.js';


const Schedule = ({days, viewAll, toggleViewText, handleToggle}) => {

  return <div className="schedule schedule-editor">
    <div className="btn btn-default pull-right" onClick={handleToggle}>{toggleViewText}</div>
    <ExtraJobModal />
    {_.map(days, (day, key) => {
      return <Day key={key} {...day} viewAll={viewAll} />;
    })}
  </div>
};

export default Schedule;
