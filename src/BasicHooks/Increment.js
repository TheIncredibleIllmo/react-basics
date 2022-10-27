import React, { useState } from "react";

export const Increment = () => {
  const [counter, setCounter] = useState(0);

  const [person, setPerson] = useState({
    name: "Satya",
    lastName: "Aguilar",
  });

  /*
   * TODO: Update person state when the user
   *  hits the "Update" button.
   */

  const handleBtnClick = () => {
    setCounter((prev) => prev + 1);
  };

  const handleChange = ({ target: { name, value } }) => {
    setPerson({ ...person, [name]: value });
  };

  return (
    <>
      <h3>Counter</h3>
      <p>{`Counter ${counter}`}</p>
      <button onClick={handleBtnClick}>Increase</button>
      <br />

      <h3>Form</h3>

      <p>
        <span>{person.name} </span>
        <span>{person.lastName}</span>
      </p>

      <form>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" onChange={handleChange} />

        <label htmlFor="lastName">LastName</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          onChange={handleChange}
        />
        <button type="" onClick={() => {}}>
          Update
        </button>
      </form>
    </>
  );
};
