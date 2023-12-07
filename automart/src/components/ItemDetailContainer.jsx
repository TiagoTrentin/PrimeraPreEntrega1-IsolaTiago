import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { ItemDetail } from './ItemDetail';
import { useCart } from '../context/CartContext';
import data from '../data/products.json';

export const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setTimeout(() => {
      setProducts(data);
      setLoading(false);
    }, 2000);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <Container className="mt-4">
      <h1>Detalle</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {products.map((product) => (
            <div key={product.id} className="item-container">
              <ItemDetail car={product} description={product.description} />
              <button onClick={() => handleAddToCart(product)}>Agregar al Carrito</button>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};