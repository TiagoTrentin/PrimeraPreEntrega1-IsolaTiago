import React from "react";
import cartIcon from "../assets/cart.png"; 

const CartWidget = ({ itemCount }) => {
  const styles = {
    img: {
      height: "2rem",
      width: "auto",
    },
    span: {
      color: "white",
      paddingLeft: 10,
    },
  };

  return (
    <React.Fragment>
      <img src={cartIcon} style={styles.img} alt="Icono de carrito de compras" />
      <span style={styles.span}>{itemCount}</span>
    </React.Fragment>
  );
};

export default CartWidget;
