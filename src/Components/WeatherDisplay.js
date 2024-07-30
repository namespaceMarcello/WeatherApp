import React from 'react';

const WeatherDisplay = ({ weatherData }) => {

  const getWeatherIconUrl = (icon) => `https://openweathermap.org/img/wn/${icon}.png`;

  const { description, icon } = weatherData.weather[0];

  return (
    <div className="weather-display">
      <h2>{weatherData.name}</h2>
      <div className="main-info">
        <p>Temperatura: {weatherData.main.temp}°C</p>
        <p>Condizioni: {description}
          <img 
            src={getWeatherIconUrl(icon)}
            alt={description}
            style={{ width: '30px', height: '30px', marginLeft: '10px', verticalAlign: 'middle' }}
          />
        </p>
        <p>Umidità: {weatherData.main.humidity}%</p>
      </div>
      <div className="additional-info">
        <h3>Informazioni aggiuntive:</h3>
        <p>Temperatura percepita: {weatherData.main.feels_like}°C</p>
        <p>Temperatura minima: {weatherData.main.temp_min}°C</p>
        <p>Temperatura massima: {weatherData.main.temp_max}°C</p>
        <p>Pressione: {weatherData.main.pressure} hPa</p>
        <p>Velocità del vento: {weatherData.wind.speed} m/s</p>
        <p>Direzione del vento: {weatherData.wind.deg}°</p>
        <p>Nuvolosità: {weatherData.clouds.all}%</p>
        {weatherData.rain && <p>Pioggia (ultima ora): {weatherData.rain['1h']} mm</p>}
        <p>Visibilità: {weatherData.visibility} metri</p>
        <p>Paese: {weatherData.sys.country}</p>
        <p>Alba: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p>Tramonto: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;