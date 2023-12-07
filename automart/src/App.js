import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ItemList from '../src/components/ItemList';
import Checkout from '../src/components/Checkout';
import { AddToCart } from './components/AddToCart';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Lista de Productos</Link></li>
          <li><Link to="/add-to-cart">Agregar al Carrito</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
