import React from 'react';


const EmptyLayout = ({content = () => null }) => (
  <div id="main-content" className="container-fluid">
    {content()}
  </div>
);

export default EmptyLayout;
