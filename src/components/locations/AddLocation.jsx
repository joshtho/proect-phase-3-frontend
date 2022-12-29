import React, { useState } from 'react'

function AddLocation() {
  const [locationData, setLocationData] = useState({
    name: "",
    description: "",
    image: ""
  })
    return (
        <div>
            <h1>Where would you like to go</h1>
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
            
            
        </div>
  )
}

export default AddLocation