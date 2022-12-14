import React from 'react'
import {useParams} from 'react-router-dom'

function LocationPage({lodgings, locations}) {
const params = useParams()
const currentLocation = locations.find(location => location.id === parseInt(params.id))
console.log(currentLocation)
return (
    <div>This is where the lodgings will go </div>
  )
}

export default LocationPage