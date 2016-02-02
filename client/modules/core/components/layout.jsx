import React from 'react';

const Layout = ({content = () => null }) => (
  <div className="container-fluid">
  	<Nav />
    {content()}
  </div>
);

export default Layout;
