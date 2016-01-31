import React from 'react';

import BuildingBox from './buildingBox.jsx';

const CleanerBox = ({cleaner, buildings}) => {
  let buildingsDom;

  if(buildings.length) {
    buildingsDom = buildings.map((item, index) => {
      return <BuildingBox key={index} {...item} />;
    });
  } else {
    buildingsDom = <span className="italic color-soft">takto si nic nezarobi</span>;
  }

  return <div className="cleaner-box">
    <div className="name">{cleaner.name}</div>
    <div className="buildings">
      {buildingsDom}
    </div>
  </div>

};

export default CleanerBox;
