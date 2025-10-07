import { useState } from 'react';




const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const getNameValue = (e) => {
    setNewName(e.target.value)
  }

    const getPhoneValue = (e) => {
    setNewNumber(e.target.value)
  }

  const addPersons = (e) => {
    e.preventDefault();

    const found = persons.some((element) => element.name.toLowerCase().trim() === newName.toLowerCase().trim());
    console.log(found)
    if(found) return alert(`${newName} is already added to phonebook`)

    setPersons([...persons, {name: newName, number: newNumber}]);
    setNewName('');
    setNewNumber('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersons}>
        <div>
          name: <input type='text' value={newName} onChange={getNameValue}/> 
        </div>
        <div>
          number: <input type='tel' value={newNumber} onChange={getPhoneValue}/> 
        </div>
        <div>debug: {newName + newNumber}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {persons.map((person, idx)=> (
          <p key={idx}>{person.name} {person.number}</p>
      ))}

    </div>
  )
}

export default App