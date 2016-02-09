import React from 'react';


const Buildings = ({items, onSetActive}) => {
  return <div>
    <a className="btn btn-success btn-lg pull-right" href="/buildings/new">Pridať nový objekt</a>
    <h1>Objekty</h1>
    <table className="table">
      <thead>
        <tr>
          <th>Adresa</th>
          <th>Trvanie (norma)</th>
          <th>Poznámky</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          let activeButton;
          let rowClass;
          if(item.active) {
            activeButton = <div className="btn btn-danger" onClick={() => onSetActive(item._id, false)}>zmazať</div>
          } else {
            rowClass = 'bg-danger';
            activeButton = <div className="btn btn-success" onClick={() => onSetActive(item._id, true)}>aktivovať</div>
          }
          return <tr key={item._id} className={rowClass}>
            <td>{item.name}</td>
            <td>{item.duration}</td>
            <td>{item.note}</td>
            <td className="text-right">
              {activeButton}&nbsp;
              <a className="btn btn-primary" href={`/buildings/edit/${item._id}`}>upraviť</a>
            </td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
};

export default Buildings;
