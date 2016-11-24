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
        <a className="navbar-brand" href="/">Duero Clean, s.r.o.</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li><a href="/"><i className="fa fa-clock-o"/> Dnes</a></li>
          <li><a href="/cleaners"><i className="fa fa-female"/> Upratovačky</a></li>
          <li><a href="/buildings"><i className="fa fa-building-o"/> Objekty</a></li>
          <li><a href="/schedule-editor"><i className="fa fa-calendar"/> Naplánovať rozvrh</a></li>
          <li><a href="/monthly-report"><i className="fa fa-eur"/> Report mesačný</a></li>
        </ul>
      </div>
    </div>
  </nav>

  </div>
};

export default Navigation;
