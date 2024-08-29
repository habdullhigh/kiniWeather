import { useState , useEffect} from 'react';
// import './App.css';
import Tomorrow from './components/tomorrow';
import Searchbar from './components/searchbar';
import Sidebar from './components/Sidebar';
import Rightsidebar from './components/rightsidebar';
import BurgerIcon from './components/burgericon';
import AirConditions from './components/airconditions';
import { currentWeatherurl, apiKey } from './components/api';

function App() {
  const [data, setData] = useState<any>(null); // Store current weather data
  const [searchQuery, setSearchQuery] = useState<string>('nigeria'); // Store the search query

  const handleSearch = async (query: string ='nigeria') => {
    setSearchQuery(query); // Update searchQuery state with the new query

    fetch(`${currentWeatherurl}${query}?unitGroup=us&key=${apiKey}&contentType=json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Store the weather data
        console.log('gotten');
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };
  useEffect(() => {
    handleSearch();
     // This will use the default value 'Nigeria'
  }, []);

  return (
    <>
      <BurgerIcon />
      <Sidebar />
      <div className='mainside text-white pt-6'>
        <Searchbar onSearch={handleSearch} />
        <h2 className='Heading '>{data ? data.resolvedAddress : 'Location'}</h2>
        <p className='text-[#AEB5CD]'>Chance of Rain: 0°C</p>
        <h2 className='tempheading pt-6'>{data ? `${data.currentConditions.temp}°C` : 'Temp'}</h2>

        <Tomorrow />
        <AirConditions />
        <Rightsidebar onSearch={searchQuery}/>
      </div>
      
    </>
  );
}

export default App;
