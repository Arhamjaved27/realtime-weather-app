import './App.css';
import SearchBox from './Components/SearchBox';

function App() {
  const onSearch = (city) => {
    console.log("Searching for:", city);
  };

  return (
    <>
   <h1>Hi This is Arham</h1>

   

   <SearchBox onSearch={onSearch} />;
   </>  
  );
}

export default App;
