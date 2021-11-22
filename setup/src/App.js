import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return <main>
    <section className="container">
      <h3>0 Birthday's Today</h3>
      <List /> {/* Display List Component */}
      <button onClick= {() => console.log('You Clicked Me')}>Clear all</button>
    </section>
  </main>;
}

export default App;
