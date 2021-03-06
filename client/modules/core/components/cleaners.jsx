import React from 'react';


const Cleaners = ({items, onSetActive}) => {
  return <div>
    <a className="btn btn-success btn-lg pull-right" href="/cleaners/new">Pridať novú upratovačku</a>
    <h1>Upratovačky</h1>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Meno</th>
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
            rowClass = 'bg-danger';
            activeButton = <div className="btn btn-success" onClick={() => onSetActive(item._id, true)}>aktivovať</div>
          }
          return <tr key={item._id} className={rowClass}>
            <td>{item.name}</td>
            <td>{item.note}</td>
            <td className="text-right">
              {activeButton}&nbsp;
              <a className="btn btn-primary" href={`/cleaners/edit/${item._id}`}>upraviť</a>
            </td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
};

export default Cleaners;
