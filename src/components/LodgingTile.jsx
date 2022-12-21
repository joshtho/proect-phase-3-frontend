import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function LodgingTile({stay, location}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={location.image} />
      <Card.Body>
        <Card.Title>{stay.dates}</Card.Title>
        <Card.Text>
          {stay.guests}
        </Card.Text>
        <Button variant="primary">Go to the Link</Button>
      </Card.Body>
    </Card>
  );
}

export default LodgingTile