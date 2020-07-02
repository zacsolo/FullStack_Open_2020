import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import Notification from './Notification';
import PersonForm from './PersonForm';
import Persons from './Persons';
import contactService from './server/backend';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchState, setSearchState] = useState('');
  const [filtered, setFiltered] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    contactService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleChange = (e) => {
    e.target.name === 'name'
      ? setNewName(e.target.value)
      : setNewNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!persons.find(personMatch)) {
      addEntry();
      setError(false);
      setMessage('New Contact Added');
    } else {
      if (window.confirm(`${newName} is already added to phonebook`)) {
        setError(false);
        setMessage('Number Updated');
        return updateEntry();
      } else {
        setNewName('');
        setNewNumber('');
      }
    }
  };

  const handleFilter = (e) => {
    setFiltered(true);
    setSearchState(e.target.value);
  };

  const personMatch = (p) => {
    return p.name === newName;
  };

  const filteredName = persons.filter((n) =>
    n.name.toLowerCase().includes(searchState.toLowerCase())
  );

  const addEntry = () => {
    let newEntry = { name: newName, number: newNumber };
    contactService.create(newEntry).then((response) => {
      setPersons(persons.concat(response.data));
    });
    setNewName('');
    setNewNumber('');
  };

  const updateEntry = () => {
    const newContact = persons.find(personMatch);
    const newEntry = { ...newContact, number: newNumber };
    contactService
      .update(newEntry, newEntry.id)
      .then((response) => {
        setPersons(persons.map((p) => (p.id !== newEntry.id ? p : newEntry)));
      })
      .catch((error) => {
        setMessage(
          `The contact '${newEntry.name}' was already deleted from server`
        );
        setPersons(persons.filter((n) => n.id !== newEntry.id));
        setError(true);
      });
    setNewName('');
    setNewNumber('');
  };

  const deleteEntry = (id) => {
    const newArr = [...persons];
    contactService.deleteContact(id).then((response) => {
      setPersons(newArr.filter((p) => p.id !== id));
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Phonebook</h2>
      <Notification message={message} error={error} />
      <Filter searchState={searchState} handleFilter={handleFilter} />

      <h3>Add a new contact</h3>

      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        handleChange={handleChange}
      />

      <h3>Numbers</h3>

      <Persons
        filtered={filtered}
        persons={persons}
        filteredName={filteredName}
        deleteEntry={deleteEntry}
      />
    </div>
  );
};

export default App;
