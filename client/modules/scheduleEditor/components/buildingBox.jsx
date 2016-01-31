import React from 'react';

const BuildingBox = ({name, duration}) => {
  return <div className="building-box">
    {name} <span className="duration">({duration})</span>
  </div>

};

export default BuildingBox;
