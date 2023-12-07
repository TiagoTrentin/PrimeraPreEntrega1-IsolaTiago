import React, { useState } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

const Checkout = ({ stripe }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
