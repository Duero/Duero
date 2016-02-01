import React from 'react';


const Schedule = () => {

  const cleaners = [
    {
      cleaner: {name: 'Hanka S.'},
      buildings: [
        {name: 'Dlha 2', duration: '4:30'},
        {name: 'Mlinska d. 5', duration: '2:10'},
        {name: 'Hradna 134', duration: '0:45'}
      ]
    },

    {
      cleaner: {name: 'Magda V.'},
      buildings: [
        {name: 'Hlavna 42', duration: '7:30'}
      ]
    },

    {
      cleaner: {name: 'Eva P.'},
      buildings: []
    }

  ];


  return <div className="schedule">
    <h1 className="text-center">Pondelok <small>(dnes)</small></h1>

    <div className="cleaner-box">
    <dl className="dl-horizontal">
      <dt>Hanka S.<br /><small><span className="text-muted">spolu 3:45</span></small></dt>
      <dd>
        <div className="btn-group">
          <button type="button" className="btn btn-warning btn-lg">T. G. Masaryka 55</button>
          <button type="button" className="btn btn-warning dropdown-toggle btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-right">
            <li><a href="#">Hanka S.</a></li>
            <li><a href="#">Evicka Hmmm.</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Zrušiť</a></li>
          </ul>
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn-success btn-lg">T. G. Masaryka 53</button>
          <button type="button" className="btn btn-success dropdown-toggle btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-right">
            <li><a href="#">Hanka S.</a></li>
            <li><a href="#">Evicka Hmmm.</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Zrušiť</a></li>
          </ul>
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn-danger btn-lg">T. G. Masaryka 57</button>
          <button type="button" className="btn btn-danger dropdown-toggle btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-right">
            <li><a href="#">Hanka S.</a></li>
            <li><a href="#">Evicka Hmmm.</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Zrušiť</a></li>
          </ul>
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn-success btn-lg">+1:30 hod</button>
          <button type="button" className="btn btn-success btn-lg"><i className="fa fa-times"></i></button>
        </div>

        <button type="button" className="btn btn-info extra-hours">+15 min</button>
        <button type="button" className="btn btn-info extra-hours">+1 hod</button>

      </dd>
      </dl>
    </div>


  </div>
};

export default Schedule;
