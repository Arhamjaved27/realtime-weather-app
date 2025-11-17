import React from 'react'
import './WeatherCard.css';


function WeatherCard({ weather }) {
  if (!weather) return null;

  const w = weather;

  return (
    <div className="weather-wrapper">
      <div className="weather-card">
        
        {/* Left Section - Main Weather Info */}
        <div className="weather-main">
          <div className="weather-header">
            <div className="location-info">
              <h2>{w.location.name}</h2>
              <p className="country">{w.location.country}</p>
            </div>
            <p className="condition-text">{w.current.condition.text}</p>
          </div>

          <div className="temp-display">
            <div className="temp-icon-wrapper">
              <div className="weather-icon">
                <img src={w.current.condition.icon} alt={w.current.condition.text} />
              </div>
              <div className="temp-value">
                <h1>{w.current.temp_c}°</h1>
                <span className="temp-unit">C</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Weather Stats */}
        <div className="weather-details">
          <div className="details-grid">
            <div className="detail-item">
              <div className="detail-icon">💧</div>
              <div className="detail-content">
                <span className="detail-label">Humidity</span>
                <span className="detail-value">{w.current.humidity}%</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">💨</div>
              <div className="detail-content">
                <span className="detail-label">Wind Speed</span>
                <span className="detail-value">{w.current.wind_kph} km/h</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">☁️</div>
              <div className="detail-content">
                <span className="detail-label">Cloud Cover</span>
                <span className="detail-value">{w.current.cloud}%</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">🌡️</div>
              <div className="detail-content">
                <span className="detail-label">Feels Like</span>
                <span className="detail-value">{w.current.feelslike_c}°C</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">👁️</div>
              <div className="detail-content">
                <span className="detail-label">Visibility</span>
                <span className="detail-value">{w.current.vis_km} km</span>
              </div>
            </div>

            <div className="detail-item">
              <div className="detail-icon">🌡️</div>
              <div className="detail-content">
                <span className="detail-label">UV Index</span>
                <span className="detail-value">{w.current.uv}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WeatherCard