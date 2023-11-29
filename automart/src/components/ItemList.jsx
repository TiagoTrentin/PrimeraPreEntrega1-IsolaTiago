import React from 'react';
import { Item } from '../components/Item';

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
