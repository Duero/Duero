import React from 'react';


const MonthlyReport = () => {

  return <div className="schedule">
      <div className="btn-group pull-right">
        <button type="button" className="btn btn-default btn-lg">Január 2016</button>
        <button type="button" className="btn btn-default dropdown-toggle btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

      <div className="btn-group pull-right">
        <button type="button" className="btn btn-default btn-lg">Hanka H.</button>
        <button type="button" className="btn btn-default dropdown-toggle btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

    <h1>Hanka H. <small>(Jan 2016)</small></h1>

    <table className="table table-hover">
      <thead>
        <tr>
          <th>Dátum</th>
          <th>Objekt</th>
          <th className="text-right">Hodinovka</th>
          <th className="text-right">Hodiny</th>
          <th className="text-right">Suma</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>15. Január 2016</td>
          <td>Gogolova 45</td>
          <td className="text-right">2,50 EUR</td>
          <td className="text-right">1:30 hod</td>
          <td className="text-right">3,75 EUR</td>
        </tr>
        <tr>
          <td>15. Január 2016</td>
          <td>Gogolova 45</td>
          <td className="text-right">2,50 EUR</td>
          <td className="text-right">1:30 hod</td>
          <td className="text-right">3,75 EUR</td>
        </tr>
        <tr>
          <td>15. Január 2016</td>
          <td>Gogolova 45</td>
          <td className="text-right">2,50 EUR</td>
          <td className="text-right">1:30 hod</td>
          <td className="text-right">3,75 EUR</td>
        </tr>
        <tr>
          <td>15. Január 2016</td>
          <td>Gogolova 45</td>
          <td className="text-right">2,50 EUR</td>
          <td className="text-right">1:30 hod</td>
          <td className="text-right"><i className="fa fa-check"></i> 3,75 EUR</td>
        </tr>
      </tbody>
      <tfoot>
        <tr className="danger" style={{fontWeight: 'bold'}}>
          <td>Spolu:</td>
          <td>&nbsp;</td>
          <td className="text-right">2,50 EUR</td>
          <td className="text-right">123:30 hod</td>
          <td className="text-right">338,75 EUR</td>
        </tr>
      </tfoot>

    </table>

    <button type="button" className="btn btn-success btn-lg pull-right">Označiť ako uhradené: 134,40 EUR</button>

  </div>
};

export default MonthlyReport;
