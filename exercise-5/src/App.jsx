import React from 'react';
import data from './data'; // Import the data array
import './index.css';
function App() {
  return (
    <div className="app">
      <h1>Card List</h1>
      <div className="card-list">
        {data.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p><strong>Hobbies:</strong> {item.hobbies}</p>
            <p><strong>Gender:</strong> {item.gender}</p>
            <p><strong>Address:</strong> {item.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;