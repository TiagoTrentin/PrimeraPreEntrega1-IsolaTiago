import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import data from '../data/products.json';
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setTimeout(() => {
          const result = id
            ? data.filter((product) => product.category === id)
            : data;

          setProducts(result);
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error('Error al cargar los datos:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container className="mt-4">
      <h1>{greeting}</h1>
      {loading ? (
        <div>Loading ...</div>
      ) : (
        <ItemList products={products} />
      )}
    </Container>
  );
};

export default ItemListContainer;