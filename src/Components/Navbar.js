import React from 'react'
import { useState, useEffect } from 'react';
import './Navbar.css';
import profileImg from '../Assets/arham.jpg';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  
    return (
        <header className="header">
            <div className="logo">
                <h1>Weather App</h1>
                <span className="subtitle">Realtime</span>
            </div>
            
            <div className="header-right">
                <button 
                    className="theme-toggle-btn"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                    {isDarkMode ? "🌞": "🌙"}
                </button>
                
                <div className="profile-circle">
                    <img 
                        src={profileImg} 
                        alt="Arham Profile"
                    />
                    <span className="status-dot"></span>
                </div>
            </div>
        </header>
    );
}

export default Navbar