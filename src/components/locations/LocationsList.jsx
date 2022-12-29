import React from 'react'
import LocationTile from './LocationTile'

function LocationsList({locations}) {
  return (
    <div className='row'>
        {
        locations.map(trip => (
            <LocationTile key={trip.id} trip={trip} />
        ))
        }
    </div>
  )
}

export default LocationsList