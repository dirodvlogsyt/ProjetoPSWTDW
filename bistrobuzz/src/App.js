import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopMenu from './TopMenu';
import DetalhesPPRestaurante from './DetalhesPPRestaurante';
import Login from './Login'; 
import SignUp from './SignUp'; 
import Cart from './Cart';
import { CartProvider } from './CartContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <TopMenu />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} /> 
          <Route path="/DetalhesPPRestaurante" element={<DetalhesPPRestaurante />}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
