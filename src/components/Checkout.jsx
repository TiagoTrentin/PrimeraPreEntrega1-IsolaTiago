import React, { useState } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

const Checkout = ({ stripe }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { token } = await stripe.createToken({ name: formData.name });

    console.log("Token de tarjeta:", token);
    console.log("Otros datos del formulario:", formData);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Correo Electrónico:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Dirección:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <br />
        
        <label>
          Tarjeta de Crédito:
          <CardElement />
        </label>
        <br />

        <button type="submit">Pagar</button>
      </form>
    </div>
  );
};

export default injectStripe(Checkout);
