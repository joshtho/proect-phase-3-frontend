
import './App.css';
import HomePage from './components/HomePage';
import { useEffect, useState } from 'react';
import LocationsList from './components/LocationsList';

function App() {
  const [locations, setLocations] = useState([])
  const [lodgings, setLodgings] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/locations")
    .then(r => r.json())
    .then(locations => setLocations(locations))
  }, [])
  useEffect(() => {
    fetch("http://localhost:9292/lodgings")
    .then(r => r.json())
    .then(lodgings => setLodgings(lodgings))
  }, [])
  console.log(locations)
  console.log(lodgings)
  return (
    <div className="App">
      <HomePage />
      <LocationsList locations={locations} />
    </div>
  );
}

export default App;
