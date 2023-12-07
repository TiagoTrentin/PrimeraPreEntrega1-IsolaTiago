import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ car }) => {
  return (
    <Card style={{ width: '18rem' }} key={car.id} className="float-start">
      <Card.Img variant="top" src={car.img} />
      <Card.Body>
        <Card.Title>{car.car_model}</Card.Title>
        <Card.Text>Categoría: {car.category}</Card.Text>
        <Link to={`/item/${car.id}`}>
          <Button variant="primary">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
