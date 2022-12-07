
import './App.css';
import HomePage from './components/HomePage';
import { useEffect, useState } from 'react';
import LocationsList from './components/LocationsList';
import { Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/locations" element={<LocationsList locations={locations}  />} />
            {/* <Route path="/locations/:id" element={< /> } /> */}
        <Route />
      </Routes>
    </div>
  );
}

export default App;