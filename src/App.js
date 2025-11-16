import './App.css';
import Navbar from './Components/Navbar';
import SearchBox from './Components/SearchBox';

import {useState} from 'react';

function App() {

  const [weather, setWeather] = useState(null);
  const API_KEY = "66535c2676a8427a996153851251511";

  const onSearch = async  (city) => {
    console.log("Searching for:", city);
    
    // Here you can add the logic to fetch weather data for the searched city
    const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
    const data = await result.json();
    console.log("Weather Data:", data);
    setWeather(data);
      
    

  };

  return (
    <>
      <Navbar/>

    <div className='main'>
      
      <SearchBox onSearch={onSearch} />;
      
      <div className="content-container">

        {weather == null ? (<h1>No Data found</h1>) : (
          <div className="card">
          <h2>{weather.location.name}</h2>
          <p>{weather.location.country}</p>

          <img 
            src={weather.current.condition.icon} 
            alt={weather.current.condition.text} 
          />

          <h3>{weather.current.temp_c}°C</h3>
          <p>{weather.current.condition.text}</p>

          <p>Humidity: {weather.current.humidity}%</p>
          <p>Wind: {weather.current.wind_kph} km/h</p>
        </div>
        )}
        

      </div>

    </div>
   </>  
  );
}

export default App;
