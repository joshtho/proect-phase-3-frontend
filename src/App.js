
import './App.css';
import HomePage from './components/static/HomePage';
import { useEffect, useState } from 'react';
import LocationsList from './components/locations/LocationsList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar'
import LocationPage from './components/locations/LocationPage'
import AddLocation from './components/locations/AddLocation';
import EditLocation from './components/locations/EditLocation';

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

  function handleNewLocation(newLocation) {
    setLocations([...locations, newLocation])
  }
  function handleUpdate(updatedObj) {
    const updatedLocations = locations.map(location => {
      if (location.id === updatedObj.id) {
        return updatedObj
      } else {
        return location
      }
    })
    setLocations(updatedLocations)
  }

  function handleDelete(id) {
    const updatedLocations = locations.filter(location => location.id != id)
    setLocations(updatedLocations)
  }

  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/locations" element={<LocationsList locations={locations}  />} />
              <Route 
              path="/locations/:id" 
              element={<LocationPage lodgings={lodgings} locations={locations} /> } 
              />
              
              <Route 
              path="/locations/:id/edit" 
              element={
              <EditLocation 
              locations={locations} 
              onHandleUpdate={handleUpdate} 
              onHandleDelete={handleDelete}
              />} 
              />

              <Route 
              path="/locations/add" 
              element={<AddLocation onNewLocation={handleNewLocation} />} 
              />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;