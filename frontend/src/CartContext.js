import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const defaultCartState = {
  items: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat({ ...action.item, amount: 1 });
      }
      return { ...state, items: updatedItems };

    case 'REMOVE_ITEM':
      updatedItems = state.items.filter(item => item.id !== action.id);
      return { ...state, items: updatedItems };

    case 'INCREASE_QUANTITY':
      updatedItems = state.items.map(item =>
        item.id === action.id ? { ...item, amount: item.amount + 1 } : item
      );
      return { ...state, items: updatedItems };

    case 'DECREASE_QUANTITY':
      updatedItems = state.items.map(item =>
        item.id === action.id ? { ...item, amount: Math.max(item.amount - 1, 0) } : item
      );
      return { ...state, items: updatedItems };

    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', item });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', id });
  };

  const contextValue = {
    items: cartState.items,
    addItemToCart,
    removeItemFromCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
