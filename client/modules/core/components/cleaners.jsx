import React from 'react';


const Cleaners = ({items}) => {
  return <div>
    <a className="btn btn-success btn-lg pull-right" href="/cleaners/new">Pridať novú upratovačku</a>
    <h1>Upratovačky</h1>
    <table className="table">
      <thead>
        <tr>
          <th>Meno</th>
          <th>Hodinovka</th>
          <th>Poznámky</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.salary} EUR</td>
            <td>{item.note}</td>
            <td className="text-right">
              <a className="btn btn-primary btn-xs" href={`/cleaners/edit/${item._id}`}>upraviť</a>
            </td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
};

export default Cleaners;
