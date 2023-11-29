import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemoveFromCart = (id) => {
    const confirmDelete = window.confirm("¿Seguro que quieres eliminar este artículo?");
    if (confirmDelete) {
      removeFromCart(id);
    }
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 && <p>El carrito está vacío</p>}
      {cartItems.length > 0 && (
        <ul>
          {cartItems.map(({ id, car_factory, car_model }) => (
            <li key={id}>
              {car_factory} {car_model} 
              <button
                className="delete-button"
                onClick={() => handleRemoveFromCart(id)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
