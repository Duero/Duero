import React from 'react';

import Navigation from '/client/modules/core/components/navigation.jsx';

const Layout = ({content = () => null }) => (
  <div id="main-content" className="container-fluid">
  	<Navigation />
    {content()}
  </div>
);

export default Layout;
