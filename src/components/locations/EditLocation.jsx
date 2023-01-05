import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function EditLocation({locations, onHandleUpdate}) {
    const params = useParams()
    const locationId = parseInt(params.id)
    const currentLocation = locations.find(location => location.id === locationId)
    const [locationData, setLocationData] = useState({
        name: currentLocation.name,
        description: currentLocation.description,
        image: currentLocation.image
    })
console.log(locationData)
function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/locations/${locationId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: locationData.name,
        description: locationData.description,
        image: locationData.image
      }),
    })
      .then((r) => r.json())
      .then((updatedMessage) => onHandleUpdate(updatedMessage));
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
        <Button>Delete Location</Button>
    
        </div> : <h1>Loading...</h1>
        }
    </div>
  )
}

export default EditLocation