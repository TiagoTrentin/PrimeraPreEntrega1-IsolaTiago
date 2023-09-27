import React from 'react';
import ItemListContainer from './ItemListContainer';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <a href="/">AutoMart</a>
      </div>
      <ul className="nav-links">
        <li><a href="/home">Inicio</a></li>
        <li><a href="/vehicles">Vehiculos</a></li>
        <li><a href="/contact">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
