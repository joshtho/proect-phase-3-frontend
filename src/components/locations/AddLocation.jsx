import React, { useState } from 'react'

function AddLocation({onNewLocation}) {
  const [locationData, setLocationData] = useState({
    name: "",
    description: "",
    image: ""
  })

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({locationData}),
    })
      .then((r) => r.json())
      .then((newLocation) => onNewLocation(newLocation));
  }
    return (
        <div>
            <h1>Where would you like to go</h1>

            <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='City and state ...'
            value={locationData.name}
            onChange={(e) => setLocationData({...locationData, name: e.target.value})}
            />
            <input 
            type="text" 
            placeholder='Description ...'
            value={locationData.description}
            onChange={(e) => setLocationData({...locationData, description: e.target.value})}
            />
            <input 
            type="text" 
            placeholder='Image url ...'
            value={locationData.image}
            onChange={(e) => setLocationData({...locationData, image: e.target.value})}
            />
            </form>
            
            
        </div>
  )
}

export default AddLocation