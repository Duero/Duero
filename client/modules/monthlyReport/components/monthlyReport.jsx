import React from 'react';


const MonthlyReport = ({month, jobs, cleaner, allCleaners, allMonths, Collections, totals, onMarkAllAsPaid}) => {
  const thisMonth = moment(month, 'YYYYMM');
  const thisCleaner = Collections.Cleaners.findOne(cleaner._id) || {};


  return <div className="schedule">
      <div className="btn-group pull-right">
        <button type="button" className="btn btn-info dropdown-toggle btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {thisCleaner.name} <span className="caret"></span>
        </button>
        <ul className="dropdown-menu dropdown-menu-right">
          {allCleaners.map(item => {
            return <li key={item._id}><a href={`/monthly-report/${item._id}/${thisMonth.format('YYYYMM')}`}>{item.name}</a></li>
          })}
        </ul>
      </div>

      <div className="btn-group pull-right" style={{marginRight: '20px'}}>
        <button type="button" className="btn btn-info dropdown-toggle btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {thisMonth.format('MMMM YYYY')} <span className="caret"></span>
        </button>
        <ul className="dropdown-menu dropdown-menu-right">
          {allMonths.map(item => {
            return <li key={item.value}><a href={`/monthly-report/${cleaner._id}/${item.value}`}>{item.name}</a></li>
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
          return <tr key={item._id}>
            <td>{moment(item.date).format('D. MMMM YYYY')}</td>
            <td>{item.title()}</td>
            <td className="text-right">{item.salary || '?'} EUR</td>
            <td className="text-right">{formatMinutes(item.duration || 0)} hod</td>
            <td className="text-right">{item.paid ? <span className="label label-success">Uhradené</span> : ''} {roundTo(item.salary * item.duration / 60, 2) || '?'} EUR</td>
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

    <button type="button" className="btn btn-success btn-lg pull-right" onClick={() => onMarkAllAsPaid(cleaner._id, month)}>Označiť ako uhradené: {totals.unpaid} EUR</button>

  </div>
};

export default MonthlyReport;
