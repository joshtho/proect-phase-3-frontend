import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function EditLocation({locations, onHandleUpdate, onHandleDelete}) {
    const params = useParams()
    const navigate = useNavigate()
    const locationId = parseInt(params.id)
    const currentLocation = locations.find(location => location.id === locationId)
    const [locationData, setLocationData] = useState({
        name: currentLocation.name,
        description: currentLocation.description,
        image: currentLocation.image
    })

function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/locations/${locationId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationData),
    })
      .then((r) => r.json())
      .then((updatedLocation) => {
        onHandleUpdate(updatedLocation)
        navigate('/locations')

      })
}

function handleDelete() {
    fetch(`http://localhost:9292/locations/${locationId}`, {
        method: "DELETE",
    })
    onHandleDelete(locationId)
    navigate('/locations')
}

  return (
    <div>

        {currentLocation ?
        <div>
        <h1>{currentLocation.name}</h1>
    
        <form onSubmit={handleSubmit}>
        <h3>City and State</h3>
        <input 
        type="text" 
        value={locationData.name}
        onChange={(e) => setLocationData({...locationData, name: e.target.value})}
        />
        <h3>Description</h3>
        <input 
        type="text" 
        value={locationData.description}
        onChange={(e) => setLocationData({...locationData, description: e.target.value})}
        />
        <h3>Image Url</h3>
        <input 
        type="text" 
        value={locationData.image}
        onChange={(e) => setLocationData({...locationData, image: e.target.value})}
        />
        <Button onClick={handleSubmit}>Update Location</Button>
        </form> 
        <Button onClick={handleDelete}>Delete Location</Button>
    
        </div> : <h1>Loading...</h1>
        }
    </div>
  )
}

export default EditLocation