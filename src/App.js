import React, { useState } from 'react';
import WeatherForm from './Components/WeatherForm';
import WeatherDisplay from './Components/WeatherDisplay';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="App">
      <h1>Previsioni Meteo</h1>
      <WeatherForm setWeatherData={setWeatherData} />
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default App;
