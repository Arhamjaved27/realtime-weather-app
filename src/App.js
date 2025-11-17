import './App.css';
import Navbar from './Components/Navbar';
import SearchBox from './Components/SearchBox';

// import bg images 
import night from "./Assets/night.jpg";
import sunny from "./Assets/sunny.jpg";
import cloudy from "./Assets/cloudy.jpg";
import rainy from "./Assets/rainy.jpg";
import snow from "./Assets/snow.jpg";
import thunder from "./Assets/thunder.jpg";
import defaultImg from "./Assets/default.jpg";

import {useState} from 'react';
import WeatherCard from './Components/WeatherCard';
import Loader from './Components/Loader';

function App() {


  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const API_KEY = "66535c2676a8427a996153851251511";

  const onSearch = async  (city) => {
    console.log("Searching for:", city);
    
    // Here you can add the logic to fetch weather data for the searched city
    try{
      setLoading(true);
      const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
      const data = await result.json();
      console.log("Weather Data:", data);
      setWeather(data);

      }
    catch(error){
      console.error("Error fetching weather data:", error);
    }
    finally{
      setLoading(false);
      // Any cleanup or final steps can go here
    }
      
    

  };

  const getBackgroundImage = () => {
    const condition = weather.current.condition.text.toLowerCase();
    const isDay = weather.current.is_day === 1;

    if (!isDay) return night;

    if (condition.includes("sun") || condition.includes("clear"))
      return sunny;

    if (condition.includes("cloud"))
      return cloudy;

    if (condition.includes("rain") || condition.includes("drizzle"))
      return rainy;

    if (condition.includes("snow"))
      return snow;

    if (condition.includes("thunder"))
      return thunder;

    return defaultImg;
  };

  return (
    <>
      <Navbar/>
      <div className='main weather-bg' style={{ 
        backgroundImage: weather ? `url(${getBackgroundImage()})` : "none"
      }}>
        
        <SearchBox onSearch={onSearch} />
        <div className="content-container">
          {loading ? <Loader /> : <WeatherCard weather={weather} />}
        </div>

      </div>
   </> 
  );
}

export default App;
