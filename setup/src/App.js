import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  {/* creating useState to access un-named array of objects in data.js */ }
  return (
    <main>
      <section className="container">
        <h2 style={{textAlign:`center`, textDecoration: `underline`}}>{people.length} Born Today</h2>
        {/* Accessing the number of birthdays via the number of items (objects) in the array in the data.js file */}
        <h4 style={{textAlign:`center`}}>People Born on November 22</h4>
        <List people={people} /> 
         {/* Display List Component w/ people state value included */}
        <button onClick={() => setPeople([])}
        // Resets the list by setting the value to an empty array (using the setPeople array)
        >Clear all</button>
      </section>
    </main>
  );
}

export default App;
