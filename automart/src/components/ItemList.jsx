import React from 'react';
import Item from './Item'; 

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((car) => (
        <Item key={car.id} car={car} />
      ))}
    </div>
  );
};

export default ItemList;
