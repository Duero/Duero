import React from 'react';


const Table = ({items, onSetActive}) => {
  const fiveMonthsBefore = moment().subtract(5, 'months');

  return <table className="table table-hover">
    <thead>
    <tr>
      <th>Adresa</th>
      <th>Trvanie (norma)</th>
      <th>Velké upratovanie</th>
      <th>Poznámky</th>
      <th />
    </tr>
    </thead>
    <tbody>
    {items.map(item => {
      let activeButton;
      let rowClass;
      if(item.active) {
        activeButton = <div className="btn btn-danger" onClick={() => onSetActive(item._id, false)}>deaktivovať</div>
      } else {
        rowClass = 'opacity-half';
        activeButton = <div className="btn btn-success" onClick={() => onSetActive(item._id, true)}>aktivovať</div>
      }
      const shouldBeCleaned = item.lastBigCleaning().isBefore(fiveMonthsBefore);
      return <tr key={item._id} className={rowClass}>
        <td>{item.name}</td>
        <td>{formatMinutes(item.duration)}</td>
        <td className={shouldBeCleaned ? "text-danger bold" : ""}>
          {shouldBeCleaned ? <i className="fa fa-warning" /> : null}&nbsp;
          {item.bigCleaningFormatted()}
        </td>
        <td>{item.note}</td>
        <td className="text-right">
          <a className="btn btn-primary" href={`/buildings/edit/${item._id}`}>upraviť</a>&nbsp;
          {activeButton}
        </td>
      </tr>
    })}
    </tbody>
  </table>
}


const Buildings = ({items, onSetActive}) => {
  const fiveMonthsBefore = moment().subtract(5, 'months');

  const notCleaned = [], cleaned = [], deactivated = [];

  items.map(item => {

    if(item.active) {
      const shouldBeCleaned = item.lastBigCleaning().isBefore(fiveMonthsBefore);
      if(shouldBeCleaned) notCleaned.push(item);
      else cleaned.push(item);
    } else {
      deactivated.push(item)
    }
  });

  return <div>
    <a className="btn btn-success btn-lg pull-right" href="/buildings/new">Pridať nový objekt</a>
    <h1>Objekty <span className="small">({items.length})</span></h1>

    <h3>Treba umyť okná <span className="small">({notCleaned.length})</span></h3>
    <Table items={notCleaned} onSetActive={onSetActive} />

    <h3>Umyté <span className="small">({cleaned.length})</span></h3>
    <Table items={cleaned} onSetActive={onSetActive} />

    <h3>Deaktivované <span className="small">({deactivated.length})</span></h3>
    <Table items={deactivated} onSetActive={onSetActive} />
  </div>
};

export default Buildings;
