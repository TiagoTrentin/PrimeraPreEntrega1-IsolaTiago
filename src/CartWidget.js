import React, { useState } from 'react';

const CartWidget = () => {
  const [numero, setNumero] = useState(0);

  const handleClick = () => {
    setNumero(numero + 1);
  }

  return (
    <div className="cart-widget" onClick={handleClick}>
      <img src="CarritoDeComprasPng.png" alt="Carrito" />
      <span>{numero}</span>
    </div>
  );
}

export default CartWidget;
