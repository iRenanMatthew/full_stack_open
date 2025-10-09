import { useState } from "react";
import Filter from "./components/Filter";
import PersonForms from "./components/PersonForms";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

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
      <Filter getFilterSearch={getFilterSearch} filter={filter}/>

      <h3>Add a new</h3>
      <PersonForms persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons notes={notesToShow}/>

    </div>
  );
};

export default App;
