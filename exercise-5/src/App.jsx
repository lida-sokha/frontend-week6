import React from "react";
import { students } from "./data.js"; // Make sure this path is correct
import './index.css'; // Import your CSS (if not already imported globally)


function App() {
  return (
    <>
      <header>
        <h1>My Items</h1> {/* Changed to "My Items" to match your example */}
      </header>
      <main>
        <div className="cards-view"> {/* Added the outer div */}
          <div className="cards-grid"> {/* Added the grid div */}
            {students.map((studentData) => (
              <Place key={studentData.id} student={studentData} /> // Pass the whole student object
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;