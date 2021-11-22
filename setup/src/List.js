import React from 'react';

const List = ({ people }) => { // destructuring the people prop created in app.js
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        // creating a new array (map method) with the returned values from the data.js file (id, name, age, image) and setting it to the person variable
        return <article key={id} className="person">
          <img src={image} alt={name} />
          {/* setting the image to the images  and the alt to the names set in the data.js file */}
          <div>
            <h4>{name}</h4>
            <p>{age} Years Old</p>
          </div>
        </article>
      })}
    </>
  );
};

export default List;
