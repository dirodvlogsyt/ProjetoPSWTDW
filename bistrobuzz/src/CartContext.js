import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const defaultCartState = {
  items: [],
  
};


function cartReducer(state, action) {
  switch (action.type) {
   
    default:
      return state;
  }
}


export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, defaultCartState);


  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', item });
  };


  const removeItemFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };


  const contextValue = {
    items: state.items,
    addItemToCart,
    removeItemFromCart,

  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
