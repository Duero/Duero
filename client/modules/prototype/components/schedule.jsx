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
    <h1 className="text-center">Pondelok</h1>

    <div className="cleaner-box">
      <div className="name">Hanka S.</div>
      <div className="buildings">
        <div className="building-box">
          <div className="text-center m-b-sm">Dlha 2 <span className="duration">(4:30)</span></div>
          <div>
            <div className="btn btn-success  btn-inverted btn-sm action-button"><i className="fa fa-check" /></div>
            <span className="dropdown m-l-sm">
              <button className="btn btn-default btn-sm action-button dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                <span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </span>
          </div>
        </div>
        <div className="building-box delayed">
          <div className="text-center m-b-sm">Dlha 2 <span className="duration">(4:30)</span></div>
          <div>
            <div className="btn btn-success  btn-inverted btn-sm action-button"><i className="fa fa-check" /></div>
            <span className="dropdown m-l-sm">
              <button className="btn btn-default btn-sm action-button dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                <span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </span>
          </div>
        </div>
        <div className="building-box reassigned">
          <div className="text-center m-b-sm">Dlha 2 <span className="duration">(4:30)</span></div>
          <div>
            <div className="btn btn-success  btn-inverted btn-sm action-button"><i className="fa fa-check" /></div>
            <span className="dropdown m-l-sm">
              <button className="btn btn-default btn-sm action-button dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                <span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </span>
          </div>
        </div>
        <div className="building-box completed">
          <div className="text-center m-b-sm">Dlha 2 <span className="duration">(4:30)</span></div>
          <div>
            <div className="btn btn-danger btn-inverted btn-sm action-button"><i className="fa fa-times" /></div>
            <span className="dropdown m-l-sm">
              <button className="btn btn-default btn-sm action-button dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                <span className="caret" />
              </button>
              <ul className="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>
};

export default Schedule;
