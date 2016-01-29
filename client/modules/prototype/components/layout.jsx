import React from 'react';

const Layout = ({content = () => null }) => (
  <div className="container-fluid">
    {content()}
  </div>
);

export default Layout;
