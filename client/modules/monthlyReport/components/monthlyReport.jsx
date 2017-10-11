import React from 'react';


const MonthlyReport = ({urlPrefix = 'monthly-report', month, jobs, cleaner, allCleaners, allMonths, Collections, totals, onMarkAllAsPaid, building, allBuildings, search, handleSearch}) => {
  const isAdmin = urlPrefix === 'monthly-report';
  const thisMonth = moment(month, 'YYYYMM');
  const thisCleaner = cleaner;
  const thisBuilding = building;


  let currentDay, daySum = {duration: 0, price: 0};

  const daySumRow = (currentDay, daySum) => {
    return <tr className="info" key={`${currentDay}_sum`}>
      <td />
      <td />
      <td />
      <td />
      <td />
      <td className="text-right">{formatMinutes(daySum.duration)} hod</td>
      <td className="text-right">{roundTo(daySum.price, 2)} EUR</td>
    </tr>
  }

  const days = [];
  if(jobs.length) {
    jobs.map(item => {
      const date = moment(item.date).format('D. MMMM YYYY');
      const price = roundTo(item.salary * item.duration / 60, 2);

      if(!currentDay) {
        currentDay = date;
      }

      if(currentDay !== date) {
        days.push(daySumRow(currentDay, daySum));
        currentDay = null;
        daySum = {duration: 0, price: 0}
      }

      const cleaner = item.cleaner() || {name: '??'};
      days.push(
        <tr key={item._id}>
          <td>{date}</td>
          <td>{cleaner.name}</td>
          <td>{item.title()}</td>
          <td>{item.bigCleaning ? <span className="small">Velké upratovanie</span> : null} {item.description}</td>
          <td className="text-right">{item.salary || '?'} EUR</td>
          <td className="text-right">{formatMinutes(item.duration || 0)} hod</td>
          <td className="text-right">{item.paid ? <span className="label label-success">Uhradené</span> : ''} {price || '?'} EUR</td>
        </tr>
      );

      daySum.duration += item.duration || 0;
      daySum.price += price;

    });

    days.push(daySumRow(currentDay, daySum));
  }

  return <div className="schedule">
    <div className="btn-group pull-right">
      <button type="button" className="btn btn-info dropdown-toggle btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {thisCleaner.name  || 'Všetky upratovačky'} <span className="caret" />
      </button>
      <ul className="dropdown-menu dropdown-menu-right">
        <li key=''><a href={`/${urlPrefix}/-/${thisMonth.format('YYYYMM')}/${thisBuilding._id || '-'}`}>~ Všetky upratovačky ~</a></li>
       {allCleaners
         .map(item => {
          return <li key={item._id} className={item.active ? '' : 'bg-danger'}><a href={`/${urlPrefix}/${item._id}/${thisMonth.format('YYYYMM')}/${thisBuilding._id || '-'}`}>{item.name}</a></li>
        })}
      </ul>
    </div>

    <div className="btn-group pull-right" style={{marginRight: '20px'}}>
      <button type="button" className="btn btn-info dropdown-toggle btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {thisMonth.format('MMMM YYYY')} <span className="caret" />
      </button>
      <ul className="dropdown-menu dropdown-menu-right">
        {allMonths.map(item => {
          return <li key={item.value}><a href={`/${urlPrefix}/${thisCleaner._id || '-'}/${item.value}/${thisBuilding._id || '-'}`}>{item.name}</a></li>
        })}
      </ul>
    </div>

    <div className="btn-group pull-right" style={{marginRight: '20px'}}>
      <button type="button" className="btn btn-info dropdown-toggle btn-lg" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {thisBuilding.name || 'Všetky objekty'} <span className="caret" />
      </button>
      <ul className="dropdown-menu dropdown-menu-right">
        <li key=''><a href={`/${urlPrefix}/${thisCleaner._id || '-'}/${thisMonth.format('YYYYMM')}/-`}>~ Všetky objekty ~</a></li>
        {allBuildings.map(item => {
          return <li key={item._id} className={item.active ? '' : 'bg-danger'}><a href={`/${urlPrefix}/${thisCleaner._id || '-'}/${thisMonth.format('YYYYMM')}/${item._id}`}>{item.name}</a></li>
        })}
      </ul>
    </div>

    <div className="pull-right" style={{marginRight: '20px'}}>
      <button className="btn btn-info btn-lg" onClick={handleSearch}>
        Popis: {search || '-'}
      </button>
    </div>


    <h1> Report</h1>

    <table className="table table-hover">
      <thead>
        <tr>
          <th>Dátum</th>
          <th>Upratovačka</th>
          <th>Objekt</th>
          <th>Popis</th>
          <th className="text-right">Hodinovka</th>
          <th className="text-right">Hodiny</th>
          <th className="text-right">Suma</th>
        </tr>
      </thead>
      <tbody>
        {days}
      </tbody>
      <tfoot>
        <tr className="danger" style={{fontWeight: 'bold'}}>
          <td>Spolu:</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td className="text-right"></td>
          <td className="text-right">{formatMinutes(totals.duration)} hod</td>
          <td className="text-right">{totals.price} EUR</td>
        </tr>
      </tfoot>

    </table>

    {isAdmin && <button type="button" className="btn btn-success btn-lg pull-right" onClick={() => onMarkAllAsPaid(cleaner._id, month)}>Označiť ako uhradené: {totals.unpaid} EUR</button>}

  </div>
};

export default MonthlyReport;
