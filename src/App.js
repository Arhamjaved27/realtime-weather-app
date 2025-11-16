import './App.css';
import Navbar from './Components/Navbar';
import SearchBox from './Components/SearchBox';

function App() {
  const onSearch = (city) => {
    console.log("Searching for:", city);
  };

  return (
    <>
      <Navbar/>

    <div className='main'>
      
      <SearchBox onSearch={onSearch} />;

    </div>
   </>  
  );
}

export default App;
