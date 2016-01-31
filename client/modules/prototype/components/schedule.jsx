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
    <dl className="dl-horizontal">
      <dt>Hanka S.<br /><small><span className="text-muted">spolu 3:45</span></small></dt>
      <dd>
        <div className="btn-group">
          <button type="button" className="btn btn-danger btn-lg">T. G. Masaryka 55</button>
          <button type="button" className="btn btn-danger dropdown-toggle btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu dropdown-menu-right">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

      </dd>
      </dl>
    </div>

    <h1 className="text-center">Utorok <small>(dnes)</small></h1>

    <div className="cleaner-box">
      <div className="name">Hanka S. <small>spolu 3:45</small></div>
      <div className="buildings">
        <div className="btn-group">
          <button type="button" className="btn btn-success">T. G. Masaryka 55</button>
          <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

        <div className="btn-group">
          <button type="button" className="btn btn-success">M. R. Štefánika 55</button>
          <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

        <div className="btn-group">
          <button type="button" className="btn btn-success">T. G. Masaryka 55</button>
          <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

        <button type="button" className="btn btn-info">+15 min</button>&nbsp;
        <button type="button" className="btn btn-info">+1 hod</button>

      </div>
    </div>
    <div className="cleaner-box">
      <div className="name">Janka T.</div>
      <div className="buildings">
        <div className="btn-group">
          <button type="button" className="btn btn-default">T. G. Masaryka 55</button>
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

        <div className="btn-group">
          <button type="button" className="btn btn-default">M. R. Štefánika 55</button>
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

        <div className="btn-group">
          <button type="button" className="btn btn-default">T. G. Masaryka 55</button>
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

        <button type="button" className="btn btn-info">+15 min</button>&nbsp;
        <button type="button" className="btn btn-info">+1 hod</button>

      </div>
    </div>
    <div className="cleaner-box">
      <div className="name">Hanka S.</div>
      <div className="buildings">
        <div className="btn-group">
          <button type="button" className="btn btn-default">T. G. Masaryka 55</button>
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

        <div className="btn-group">
          <button type="button" className="btn btn-success">M. R. Štefánika 55</button>
          <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

        <div className="btn-group">
          <button type="button" className="btn btn-success">T. G. Masaryka 55</button>
          <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

        <button type="button" className="btn btn-info">+15 min</button>&nbsp;
        <button type="button" className="btn btn-info">+1 hod</button>

      </div>
    </div>
    <div className="cleaner-box">
      <div className="name">Hanka S.</div>
      <div className="buildings">
        <div className="btn-group">
          <button type="button" className="btn btn-default">T. G. Masaryka 55</button>
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

        <div className="btn-group">
          <button type="button" className="btn btn-success">M. R. Štefánika 55</button>
          <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

        <div className="btn-group">
          <button type="button" className="btn btn-success">T. G. Masaryka 55</button>
          <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>

        <button type="button" className="btn btn-info">+15 min</button>&nbsp;
        <button type="button" className="btn btn-info">+1 hod</button>

      </div>
    </div>



  </div>
};

export default Schedule;
