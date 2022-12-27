import React from 'react'
import {useParams} from 'react-router-dom'
import LodgingTile from './LodgingTile'

function LocationPage({lodgings, locations}) {
const params = useParams()
const locationId = parseInt(params.id)
const currentLocation = locations.find(location => location.id === locationId)
const stays = lodgings.filter(lodging => locationId === lodging.location_id)
const listStays = () => (stays.map(stay => (
    <LodgingTile key={stay.id} stay={stay} location={currentLocation} />
)))

return (
    <div>
        <h1>Location Page</h1>
        {currentLocation ? 
        <div>
            <h1>{currentLocation.name}</h1>
            {listStays()}
        </div>
         : "" }
    </div>
    )
}
      
export default LocationPage