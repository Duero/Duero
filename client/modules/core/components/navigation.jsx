import React from 'react';


const Navigation = () => {
  return <div>
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Duero Clean, s.r.o.</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><a href="/">Dnes</a></li>
          <li><a href="/cleaners">Upratovačky</a></li>
          <li><a href="/buildings">Objekty</a></li>
          <li><a href="/schedule-editor">Naplánovať rozvrh</a></li>
          <li><a href="/monthly-report">Report mesačný</a></li>
        </ul>
      </div>
    </div>
  </nav>

  </div>
};

export default Navigation;
