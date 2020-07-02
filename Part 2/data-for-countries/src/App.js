import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './Country';

import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setData(response.data);
    });
  }, []);

  let matchCountry = '';
  if (!search) {
    matchCountry = '';
  } else {
    matchCountry = data.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className='App'>
      <h2>Find Countries</h2>
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {!matchCountry.length ? (
          'Search for a country'
        ) : matchCountry.length === 1 ? (
          <Country country={matchCountry[0]} />
        ) : matchCountry.length < 10 ? (
          matchCountry.map((c) => <div key={c.name}>{c.name}</div>)
        ) : (
          'Too Many Matches'
        )}
      </div>
    </div>
  );
}

export default App;
