import React, { useEffect, useState } from 'react';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;

export default function Country({ country }) {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${api_key}`
      )
      .then((response) => setWeather(response.data));
  }, []);

  return (
    <div>
      <h2>{country.name}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h2>Languages</h2>
      <ul>
        {country.languages.map((l) => (
          <li key={l.name}>{l.name}</li>
        ))}
      </ul>
      <div>
        <img
          className='flag'
          src={country.flag}
          alt={`flag of ${country.name}`}
        />
        <div>
          <h3>Weather in {country.capital}</h3>
          {weather ? (
            <div>
              <p>Temperature: {weather.main.temp} degrees kelvin</p>
              <p>{weather.weather[0].description} </p>
              <p>
                Wind: {weather.wind.speed} at {weather.wind.deg} degrees{' '}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
