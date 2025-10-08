import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
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

  const [filter, setFilter] = useState("");

  const getFilterSearch = (e) => {
    setFilter(e.target.value);
    console.log(notesToShow)
  };

  const notesToShow = filter ? persons.filter((person) => {
      const match = person.name.toLowerCase().includes(filter.toLowerCase());
      if (!match) console.log(`${person.name} not in directory`);
      return match;
  }
  )
  : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <label>Filter shown with: </label>
      <input
        type="text"
        onChange={getFilterSearch}
        value={filter}
      />
      {filter}

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
        <div>debug: {newName + newNumber}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {notesToShow.map((person, idx) => (
        <p key={idx}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
