import React, { useContext } from 'react';
import CartContext from './CartContext'; 

const Cart = () => {
  const { items, removeItemFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const handleRemoveItem = (id) => {
    removeItemFromCart(id);
  };

  const handleIncreaseQuantity = (id) => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = (id) => {
    decreaseQuantity(id);
  };

  return (
    <div className="cart-container">
    {items.length === 0 ? (
      <p className="cart-empty-message">O carrinho está vazio.</p>
    ) : (
      items.map((item) => (
        <div className="cart-item" key={item.id}>
          <span className="item-name">{item.name}</span>
          <div className="quantity-adjust">
            <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
            <span className="item-quantity">{item.amount}</span>
            <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
          </div>
          <button className="remove-item-button" onClick={() => handleRemoveItem(item.id)}>
            Remover
          </button>
        </div>
      ))
    )}
  </div>
  
  );
};

export default Cart;
