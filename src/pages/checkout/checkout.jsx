import React, { useState, useEffect } from 'react';
import "./checkout.css";

const Checkout = ({ cart }) => {
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    // Inițializează cantitățile pentru fiecare produs în cart
    const initialQuantities = {};
    cart.forEach(product => {
      initialQuantities[product.id] = (initialQuantities[product.id] || 0) + 1;
    });
    setQuantities(initialQuantities);
  }, [cart]);

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => {
      return total + (product.price * quantities[product.id]);
    }, 0).toFixed(2);
  };

  return (
    <div className='page-wrapper'>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartElement) => (
            <tr key={cartElement.id}>
              <td>
                <img src={cartElement.image} alt={cartElement.title} />
              </td>
              <td>
                <h4>{cartElement.title}</h4>
              </td>
              <td>
                <input
                  type="number"
                  value={quantities[cartElement.id]}
                  min="1"
                  onChange={(e) => handleQuantityChange(cartElement.id, parseInt(e.target.value, 10))}
                />
              </td>
              <td>
                <h4>${(cartElement.price * quantities[cartElement.id]).toFixed(2)}</h4>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='total-price'>
        <h3>Total: ${getTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default Checkout;
