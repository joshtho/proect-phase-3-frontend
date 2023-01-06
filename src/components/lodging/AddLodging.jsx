import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import {useNavigate, useParams} from 'react-router-dom'

function AddLodging({onNewLodging}) {
    const navigate = useNavigate()
    const params = useParams()
    const locationId = parseInt(params.id)
 
  const [lodgingData, setLocationData] = useState({
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
      .then(newLocation => {
          onNewLodging(newLocation)
          navigate('/locations')
        }
        )
}

    return (
        <div>
            <h1>Give us some info</h1>

            <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Dates of trip M/DD/YYYY ...'
            value={lodgingData.dates}
            onChange={(e) => setLocationData({...lodgingData, dates: e.target.value})}
            />
            <input 
            type="text" 
            placeholder='Estimated exact number of guests ...'
            value={lodgingData.guests}
            onChange={(e) => setLocationData({...lodgingData, guests: e.target.value})}
            />
            <input 
            type="text" 
            placeholder='Image url ...'
            value={lodgingData.image}
            onChange={(e) => setLocationData({...lodgingData, image: e.target.value})}
            />
            <input 
            type="text" 
            placeholder='Link url ...'
            value={lodgingData.link}
            onChange={(e) => setLocationData({...lodgingData, link: e.target.value})}
            />
            <input 
            type="text" 
            placeholder='What Season is this trip? ...'
            value={lodgingData.season}
            onChange={(e) => setLocationData({...lodgingData, season: e.target.value})}
            />
            <Button onClick={handleSubmit}>Add your lodging</Button>
            </form>
            
            
        </div>
  )
}

export default AddLodging