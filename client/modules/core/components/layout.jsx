import React from 'react';

import Nav from '/client/modules/core/components/nav.jsx';

const Layout = ({content = () => null }) => (
  <div className="container-fluid">
  	<Nav />
    {content()}
  </div>
);

export default Layout;
