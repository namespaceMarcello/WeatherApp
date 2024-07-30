import React, { useState } from 'react';
import axios from 'axios';

const WeatherForm = ({ setWeatherData }) => {
  const [zipCode, setZipCode] = useState('');
  const [error, setError] = useState('');

  const validateItalianZipCode = (code) => {
    return /^\d{5}$/.test(code);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateItalianZipCode(zipCode)) {
      setError('Inserisci un CAP italiano valido (5 cifre)');
      return;
    }

    try {
      const geoResponse = await axios.get(`https://api.zippopotam.us/it/${zipCode}`);
      const { latitude, longitude } = geoResponse.data.places[0];

      const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=42c71604200c46f086e9a2fb112573ad&units=metric`);

      setWeatherData(weatherResponse.data);
    } catch (error) {
      console.error('Errore nel recupero dei dati meteo:', error);
      if (error.response && error.response.status === 404) {
        setError('CAP non trovato. Assicurati di aver inserito un CAP italiano valido.');
      } else {
        setError('Errore nel recupero dei dati meteo. Riprova.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={zipCode} 
        onChange={(e) => setZipCode(e.target.value)}
        placeholder="Inserisci il codice postale"
      />
      <button type="submit">Ottieni previsioni</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default WeatherForm;
