import React from 'react'
import LocationTile from './LocationTile'
import Button from 'react-bootstrap/Button'

function LocationsList({locations}) {
  return (
    <div className='row'>
        {
        locations.map(trip => (
            <LocationTile key={trip.id} trip={trip} />
        ))
        }
        <h1>Add a location you would like to visit!</h1>
        <Button>Add location</Button>
    </div>
  )
}

export default LocationsList