import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  {/* creating useState to access un-named array of objects in data.js */ }
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthday's Today</h3>
        {/* Accessing the number of birthdays via the number of items (objects) in the array in the data.js file */}
        <List people={people} /> {/* Display List Component w/ people state value included */}
        <button onClick={() => console.log('You Clicked Me')}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
