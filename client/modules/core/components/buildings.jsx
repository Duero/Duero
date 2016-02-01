import React from 'react';


const Buildings = ({items}) => {
  return <div>
    <a className="btn btn-primary" href="/new-building">Pridat</a>
    <h1>Objekty</h1>
    <table className="table">
      <thead>
        <tr>
          <th>Adresa</th>
          <th>Trvanie</th>
          <th>Poznamky</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.duration}</td>
            <td>{item.note}</td>
            <td>
              <a href={`/buildings/edit/${item._id}`}>upraviť</a>
            </td>
          </tr>
        })}
      </tbody>
    </table>
  </div>
};

export default Buildings;
