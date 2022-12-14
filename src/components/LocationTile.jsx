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
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" component={Link} to={`${trip.id}`} >Your stays</Button>
      </Card.Body>
    </Card>
  );
}

export default LocationTile