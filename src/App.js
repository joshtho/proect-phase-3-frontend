
import './App.css';
import HomePage from './components/static/HomePage';
import { useEffect, useState } from 'react';
import LocationsList from './components/locations/LocationsList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar'
import LocationPage from './components/locations/LocationPage'

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

  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/locations" element={<LocationsList locations={locations}  />} />
              <Route path="/locations/:id" element={<LocationPage lodgings={lodgings} locations={locations} /> } />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;