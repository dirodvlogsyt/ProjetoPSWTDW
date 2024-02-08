import React, { useState, useContext } from 'react';
import CartContext from './CartContext';
import './Cart.css';

const Cart = () => {
  const { items, removeItem, clearCart } = useContext(CartContext); 

  const handleCheckout = () => {
 
    console.log('Procedendo ao pagamento...');
  };

  return (
    <div className="cart-container">
      <h2>Carrinho de Compras</h2>
      {items.length === 0 && <p>O carrinho está vazio.</p>}
      {items.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.name}</span>
          <span>{item.price}</span>
          <button onClick={() => removeItem(item.id)}>Remover</button>
        </div>
      ))}
      <button type="limpar" onClick={clearCart}>Limpar Carrinho</button>
      <button type="checkout" onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
