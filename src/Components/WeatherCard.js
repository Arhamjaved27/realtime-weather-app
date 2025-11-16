import React from 'react'
import './WeatherCard.css';


function WeatherCard({ weather }) {
  if (!weather) return null;

  const w = weather;

  return (
    <div className="weather-wrapper">
      <div className="weather-card">

        {/* Top Info */}
        <div className="weather-header">
          <h2>{w.location.name}</h2>
          <p>{w.location.country}</p>
        </div>

        {/* Icon */}
        <div className="weather-icon">
          <img src={w.current.condition.icon} alt={w.current.condition.text} />
        </div>

        {/* Temperature */}
        <div className="temp-section">
          <h1>{w.current.temp_c}°C</h1>
          <p>{w.current.condition.text}</p>
        </div>

        {/* Bottom Stats */}
        <div className="weather-stats">
          <div className="stat">
            <h4>Humidity</h4>
            <p>{w.current.humidity}%</p>
          </div>

          <div className="stat">
            <h4>Wind</h4>
            <p>{w.current.wind_kph} km/h</p>
          </div>

          <div className="stat">
            <h4>Cloud</h4>
            <p>{w.current.cloud}%</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WeatherCard