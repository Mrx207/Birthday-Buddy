import React from "react";
import Person from "./Person";

function List({ people }) {
  return (
    <section>
      {people.map(({ id, name, age, image }) => {
        return <Person name={name} age={age} image={image} key={id} />;
      })}
    </section>
  );
}

export default List;
