import Place from "./components/Place.jsx";
import { student } from "./data.js";


function App() {
  return ( <>

  <header>
    <h1>Example</h1>
  </header>
  <main>
    <section className="student-category">
              <ul className="student">
                {/* For each place from AVAILABLE_PLACES, create a Place component */}
                    {student.map((data) => (
                      <Place 
                              key={data.id} 
                              id={data.id} 
                              image={data.image.src} 
                              title={data.title} 
                              alt={data.image.alt} 
                      />
                ))}
              </ul>
            </section>
  </main>
  </>
  );
}

export default App;
