import React from 'react';


const MonthlyReport = ({month, jobs, cleaner, allCleaners, allMonths, Collections, totals}) => {
  if (!cleaner || !month) return <div></div>;
  
  const thisMonth = moment(month, 'YYYYMM');
  const thisCleaner = Collections.Cleaners.findOne(cleaner._id) || {};


  return <div className="schedule">
      <div className="btn-group pull-right">
        <button type="button" className="btn btn-default btn-lg">{thisCleaner.name}</button>
        <button type="button" className="btn btn-default dropdown-toggle btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="caret"></span>
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-right">
          {allCleaners.map(item => {
            return <li><a href={`/monthly-report/${item._id}/${thisMonth.format('YYYYMM')}`}>{item.name}</a></li>
          })}
        </ul>
      </div>

      <div className="btn-group pull-right">
        <button type="button" className="btn btn-default btn-lg">{thisMonth.format('MMMM YYYY')}</button>
        <button type="button" className="btn btn-default dropdown-toggle btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="caret"></span>
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <ul className="dropdown-menu dropdown-menu-right">
          {allMonths.map(item => {
            return <li><a href={`/monthly-report/${cleaner._id}/${item.value}`}>{item.name}</a></li>
          })}
        </ul>
      </div>
    <h1>{cleaner.name} <small>({thisMonth.format('MMMM YYYY')})</small></h1>

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
        {jobs.map(item => {
          const building = Collections.Buildings.findOne(item.building_id);

          return <tr key={item._id}>
            <td>{moment(item.date).format('d. MMMM YYYY')}</td>
            <td>{building.name}</td>
            <td className="text-right">{item.salary || '?'} EUR</td>
            <td className="text-right">{formatMinutes(item.duration || 0)} hod</td>
            <td className="text-right">{item.price || '?'} EUR</td>
          </tr>
        })}
      </tbody>
      <tfoot>
        <tr className="danger" style={{fontWeight: 'bold'}}>
          <td>Spolu:</td>
          <td>&nbsp;</td>
          <td className="text-right"></td>
          <td className="text-right">{formatMinutes(totals.duration)} hod</td>
          <td className="text-right">{totals.price} EUR</td>
        </tr>
      </tfoot>

    </table>

    <button type="button" className="btn btn-success btn-lg pull-right">Označiť ako uhradené: {totals.unpaid} EUR</button>

  </div>
};

export default MonthlyReport;
