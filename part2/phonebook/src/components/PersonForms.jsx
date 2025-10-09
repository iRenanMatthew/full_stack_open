import { useState } from "react";

const App = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const getNameValue = (e) => {
    setNewName(e.target.value);
  };

  const getPhoneValue = (e) => {
    setNewNumber(e.target.value);
  };

  const addPersons = (e) => {
    e.preventDefault();

    const found = persons.some(
      (element) =>
        element.name.toLowerCase().trim() === newName.toLowerCase().trim()
    );
    console.log(found);
    if (found) return alert(`${newName} is already added to phonebook`);

    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName("");
    setNewNumber("");
  };

  return (
    <>
      <form onSubmit={addPersons}>
        <div>
          name:{" "}
          <input
            type="text"
            value={newName}
            onChange={getNameValue}
          />
        </div>
        <div>
          number:{" "}
          <input
            type="tel"
            value={newNumber}
            onChange={getPhoneValue}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default App;
