import React from 'react';

const ItemListContainer = () => {
  return (
    <div className="item-list-container">
      <h2>Lista de Elementos</h2>
      <ul>
        <li><a href="/contact">VehiculosPesados</a></li>
        <li><a href="/contact">VehiculosLigeros</a></li>
        <li><a href="/contact">MotoVehiculos</a></li>
      </ul>
    </div>
  );
}

export default ItemListContainer;
