import React from 'react';

import CleanerBox from './cleanerBox.jsx';

const ScheduleEditor = ({cleaners}) => {

  return <div className="schedule schedule-editor">

    <div className="row">
      <div className="col-xs-6 col-sm-8 col-md-10">
    <h1 className="text-center">Pondelok</h1>

    <div className="cleaner-box">
        <dl className="dl-horizontal">
          <dt>Hanka S.<br /><small><span className="text-muted">spolu 3:45</span></small></dt>
          <dd>
            <div className="btn-group">
              <button type="button" className="btn btn-default btn-lg">T. G. Masaryka 55</button>
              <button type="button" className="btn btn-default btn-lg"><i className="fa fa-times"></i></button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-default btn-lg">T. G. Masaryka 53</button>
              <button type="button" className="btn btn-default btn-lg"><i className="fa fa-times"></i></button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-default btn-lg">T. G. Masaryka 57</button>
              <button type="button" className="btn btn-default btn-lg"><i className="fa fa-times"></i></button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-default btn-lg">T. G. Masaryka 57</button>
              <button type="button" className="btn btn-default btn-lg"><i className="fa fa-times"></i></button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-default btn-lg">T. G. Masaryka 57</button>
              <button type="button" className="btn btn-default btn-lg"><i className="fa fa-times"></i></button>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-default btn-lg">T. G. Masaryka 57</button>
              <button type="button" className="btn btn-default btn-lg"><i className="fa fa-times"></i></button>
            </div>
          </dd>
      </dl>
    </div>
    <div className="cleaner-box">
        <dl className="dl-horizontal">
          <dt>Janka S.<br /><small><span className="text-muted">spolu 0:00</span></small></dt>
          <dd>
          </dd>
      </dl>
    </div>

      </div>

      <div className="col-xs-6 col-sm-4 col-md-2">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Objekty</h3>
          </div>
          <div className="panel-body">
              <button type="button" className="btn btn-default btn-block">Cras justo odio</button>
              <button type="button" className="btn btn-default btn-block">Dapibus ac facilisis in</button>
              <button type="button" className="btn btn-default btn-block">Morbi leo risus</button>
              <button type="button" className="btn btn-default btn-block">Porta ac consectetur ac</button>
              <button type="button" className="btn btn-default btn-block">Vestibulum at eros</button>
              <button type="button" className="btn btn-default btn-block">Cras justo odio</button>
              <button type="button" className="btn btn-default btn-block">Dapibus ac facilisis in</button>
              <button type="button" className="btn btn-default btn-block">Morbi leo risus</button>
              <button type="button" className="btn btn-default btn-block">Porta ac consectetur ac</button>
              <button type="button" className="btn btn-default btn-block">Vestibulum at eros</button>
              <button type="button" className="btn btn-default btn-block">Cras justo odio</button>
              <button type="button" className="btn btn-default btn-block">Dapibus ac facilisis in</button>
              <button type="button" className="btn btn-default btn-block">Morbi leo risus</button>
              <button type="button" className="btn btn-default btn-block">Porta ac consectetur ac</button>
              <button type="button" className="btn btn-default btn-block">Vestibulum at eros</button>
              <button type="button" className="btn btn-default btn-block">Cras justo odio</button>
              <button type="button" className="btn btn-default btn-block">Dapibus ac facilisis in</button>
              <button type="button" className="btn btn-default btn-block">Morbi leo risus</button>
              <button type="button" className="btn btn-default btn-block">Porta ac consectetur ac</button>
              <button type="button" className="btn btn-default btn-block">Vestibulum at eros</button>
              <button type="button" className="btn btn-default btn-block">Cras justo odio</button>
              <button type="button" className="btn btn-default btn-block">Dapibus ac facilisis in</button>
              <button type="button" className="btn btn-default btn-block">Morbi leo risus</button>
              <button type="button" className="btn btn-default btn-block">Porta ac consectetur ac</button>
              <button type="button" className="btn btn-default btn-block">Vestibulum at eros</button>
              <button type="button" className="btn btn-default btn-block">Cras justo odio</button>
              <button type="button" className="btn btn-default btn-block">Dapibus ac facilisis in</button>
              <button type="button" className="btn btn-default btn-block">Morbi leo risus</button>
              <button type="button" className="btn btn-default btn-block">Porta ac consectetur ac</button>
              <button type="button" className="btn btn-default btn-block">Vestibulum at eros</button>
              <button type="button" className="btn btn-default btn-block">Cras justo odio</button>
              <button type="button" className="btn btn-default btn-block">Dapibus ac facilisis in</button>
              <button type="button" className="btn btn-default btn-block">Morbi leo risus</button>
              <button type="button" className="btn btn-default btn-block">Porta ac consectetur ac</button>
              <button type="button" className="btn btn-default btn-block">Vestibulum at eros</button>
              <button type="button" className="btn btn-default btn-block">Cras justo odio</button>
              <button type="button" className="btn btn-default btn-block">Dapibus ac facilisis in</button>
              <button type="button" className="btn btn-default btn-block">Morbi leo risus</button>
              <button type="button" className="btn btn-default btn-block">Porta ac consectetur ac</button>
              <button type="button" className="btn btn-default btn-block">Vestibulum at eros</button>
          </div>
        </div>
      </div>
    </div>

  </div>
};

export default ScheduleEditor;
