import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function LodgingTile({stay, location}) {
  console.log(stay)
  function handleClick() {
    window.open(stay.link)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={stay.image} />
      <Card.Body>
        <Card.Title>{stay.season}</Card.Title>
        <Card.Title>{stay.dates}</Card.Title>
        <Card.Text>
          Guests: {stay.guests}
        </Card.Text>
        <Button onClick={handleClick}>Go to the Link</Button>
      </Card.Body>
    </Card>
  );
}

export default LodgingTile