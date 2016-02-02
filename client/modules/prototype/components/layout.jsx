import React from 'react';

const Layout = ({content = () => null }) => (
  <div className="container-fluid">

	<nav className="navbar navbar-inverse navbar-fixed-top">
	  <div className="container-fluid">
	    
	    <div className="navbar-header">
	      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	        <span className="sr-only">Toggle navigation</span>
	        <span className="icon-bar"></span>
	        <span className="icon-bar"></span>
	        <span className="icon-bar"></span>
	      </button>
	      <a className="navbar-brand" href="#">Duero Clean</a>
	    </div>

	    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      <ul className="nav navbar-nav">
	        <li className="active"><a href="/prototype/schedule">Dnes <span className="sr-only">(current)</span></a></li>
	        <li><a href="#">Upratovačky</a></li>
	        <li><a href="#">Objekty</a></li>
	        <li><a href="/prototype/schedule-editor">Rozvrh</a></li>
	        <li><a href="/prototype/monthly-report">Report mesačný</a></li>
	      </ul>
	    </div>
	  </div>
	</nav>


    {content()}
  </div>
);

export default Layout;
