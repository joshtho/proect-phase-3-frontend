import React from 'react'
import {useParams} from 'react-router-dom'
import LodgingTile from './LodgingTile'

function LocationPage({lodgings, locations}) {
const params = useParams()
const locationId = parseInt(params.id)
const currentLocation = locations.find(location => location.id === locationId)
const stays = lodgings.filter(lodging => locationId === lodging.location_id)

console.log(stays)
console.log(currentLocation)
console.log(lodgings)
return (
    <div>
        {currentLocation ? 
        <h1>{currentLocation.name}</h1>
        stays.map(stay => (
            <LodgingTile key={stay.id} stay={stay} />
        ))
         : "" }
        

    </div>
  )
}

export default LocationPage