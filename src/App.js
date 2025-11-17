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

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "66535c2676a8427a996153851251511";

  const onSearch = async  (city) => {
    console.log("Searching for:", city);
    
    // Here you can add the logic to fetch weather data for the searched city
    try{
      setLoading(true);
      const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
      
      console.log("Fetch result:", result);
      if (!result.ok) {
        // Response status not 200
        if (result.status === 400) {
          throw new Error("Invalid city name. Please try again.");
        } else if (result.status === 429) {
          throw new Error("API limit exceeded. Try again later.");
        } else {
          throw new Error("Something went wrong. Try again.");
        }
      }

      const data = await result.json();
      console.log("Weather Data:", data);
      setWeather(data);
      setError("");
      }
    catch(error){
       setError(error.message || "Network error. Please check your connection.");
       setWeather(null); // reset weather on error
    }
    finally{
      setLoading(false);
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
        
      <div className="search-container">
        <SearchBox onSearch={onSearch} />
      </div>
      
      <div className="content-container">
        {loading ? <Loader /> : error ? ( <p className="error-message">{error}</p>) : <WeatherCard weather={weather} />}
      </div>

    </div>
   </> 
  );
}

export default App;
