import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {useNavigate, useParams} from 'react-router-dom'

function AddLodging({onNewLodging, locations}) {
    const navigate = useNavigate()
    const params = useParams()
    const locationId = parseInt(params.id)
    const currentLocation = locations.find(location => location.id === locationId)
 
  const [lodgingData, setLodgingData] = useState({
    dates: "",
    guests: 0,
    image: "",
    link: "",
    season: "",
    location_id: locationId
  })

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/lodgings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lodgingData),
    })
      .then((r) => r.json())
      .then(newLodging => {
          onNewLodging(newLodging)
          navigate(`/locations/${locationId}`)
        }
    )
}
console.log(lodgingData)
    return (
        <div>
            <h1>Your new stay in {currentLocation.name}</h1>

            <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Dates of trip MM/DD/YYYY-MM/DD/YYYY ...'
            value={lodgingData.dates}
            onChange={(e) => setLodgingData({...lodgingData, dates: e.target.value})}
            />
            <input 
            type="text" 
            placeholder='Image url ...'
            value={lodgingData.image}
            onChange={(e) => setLodgingData({...lodgingData, image: e.target.value})}
            />
            <input 
            type="text" 
            placeholder='Link url ...'
            value={lodgingData.link}
            onChange={(e) => setLodgingData({...lodgingData, link: e.target.value})}
            />
            <input 
            type="text" 
            placeholder='What Season is this trip? ...'
            value={lodgingData.season}
            onChange={(e) => setLodgingData({...lodgingData, season: e.target.value})}
            />
            <h5>Estimated exact number of guests</h5>
            <input 
            type="text" 
            placeholder='Estimated exact number of guests ...'
            value={lodgingData.guests}
            onChange={(e) => setLodgingData({...lodgingData, guests: e.target.value})}
            />
            <Button onClick={handleSubmit}>Add your lodging</Button>
            </form>
            
            
        </div>
  )
}

export default AddLodging