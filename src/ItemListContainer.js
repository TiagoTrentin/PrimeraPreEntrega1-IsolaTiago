import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ul>
        <li><a href="/contact">VehiculosPesados</a></li>
        <li><a href="/contact">VehiculosLigeros</a></li>
        <li><a href="/contact">MotoVehiculos</a></li>
      </ul>
    </div>
  );
}

export default ItemListContainer;
