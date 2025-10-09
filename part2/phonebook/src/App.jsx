import Axios from 'axios';
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForms from "./components/PersonForms";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(()=> {
    Axios.get('http://localhost:3001/persons').then((response) => {
      setPersons(response.data)
      setLoading(false)
    })
  },[])

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
      <Persons notes={notesToShow} isLoading={isLoading}/>

    </div>
  );
};

export default App;
