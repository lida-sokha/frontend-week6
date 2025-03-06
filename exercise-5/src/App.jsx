import React from 'react';
import Card from "./Card";  // Importing the Card component
import data from './data';  // Importing the data array

function App() {
  return (
    <div className="app">
      <h1>Card List</h1>
      <div className="card-list">
        {data.map(item => (
          <Card
            key={item.id}
            image={item.image}
            name={item.name}
            hobbies={item.hobbies}
            gender={item.gender}
            address={item.address}
          />
        ))}
      </div>
    </div>
  );
}

export default App;