import React from 'react';
import { useCart } from './CartContext';

export const ItemDetail = ({ car, description }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(car);
  };

  return (
    <div className="item-detail-container">
      <div className="car-info">
        <div>{car.car_factory}</div>
        <div>{car.car_model}</div>
        <div>{car.car_year}</div>
        <div>{car.category}</div>
      </div>
      <img className="car-image" src={car.img} alt={`Imagen de ${car.car_model}`} />
      <div className="description">{description}</div>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Agregar al Carrito
      </button>
    </div>
  );
};
