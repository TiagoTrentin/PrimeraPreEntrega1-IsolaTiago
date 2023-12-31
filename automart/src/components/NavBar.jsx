import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { useCart } from '../context/CartContext';
import data from '../data/products.json';

const NavBar = () => {
  const categories = [...new Set(data.map(product => product.category))];
  const { cartSize } = useCart();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>AutoMart</Navbar.Brand>
        <Nav className="me-auto">
          {categories.map((category, index) => (
            <NavLink
              key={index}
              className="nav-link"
              to={`/category/${category}`}
            >
              {category}
            </NavLink>
          ))}
        </Nav>
        <CartWidget itemCount={cartSize} />
      </Container>
    </Navbar>
  );
};

export default NavBar;
