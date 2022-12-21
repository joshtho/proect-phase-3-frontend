import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

function LocationTile({trip}) {

  return (
    <Card style={{ width: '18rem' }} className='column' >
      <Card.Img variant="top" src={trip.image} />
      <Card.Body>
        <Card.Title>{trip.name}</Card.Title>
        <Button variant="primary" href={`locations/${trip.id}`} >Your stays</Button>
      </Card.Body>
    </Card>
  );
}

export default LocationTile