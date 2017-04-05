import React from 'react';


const Buildings = ({items, onSetActive, onBigCleaning}) => {
  const fiveMonthsBefore = moment().subtract(5, 'months');

  return <div>
    <a className="btn btn-success btn-lg pull-right" href="/buildings/new">Pridať nový objekt</a>
    <h1>Objekty</h1>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Adresa</th>
          <th>Trvanie (norma)</th>
          <th>Velké upratovanie</th>
          <th>Poznámky</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => {
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
            <td className="text-right">{++i}.</td>
            <td>{item.name}</td>
            <td>{formatMinutes(item.duration)}</td>
            <td className={shouldBeCleaned ? "text-danger bold" : ""}>
              {shouldBeCleaned ? <i className="fa fa-warning" /> : null}&nbsp;
              {item.bigCleaningFormatted()}
            </td>
            <td>{item.note}</td>
            <td className="text-right">
              <a className="btn btn-primary" href={`/buildings/edit/${item._id}`}>upraviť</a>&nbsp;
              <div className="btn btn-info" onClick={onBigCleaning.bind(null, item._id)}>velké upratovanie</div>&nbsp;
              {activeButton}
            </td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
};

export default Buildings;
