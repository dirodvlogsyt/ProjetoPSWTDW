import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopMenu from './TopMenu';
import DetalhesPPRestaurante from './DetalhesPPRestaurante';
import Login from './Login'; 
import SignUp from './SignUp'; 
import Cart from './Cart';
import { CartProvider } from './CartContext';
import DetalhesRestaurantes from './DetalhesRestaurantes';
import GestãoDeUSuários from './GestãoDeUsuários'
import Restaurantes from './Restaurantes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <TopMenu />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} /> 
          <Route path="/" element={<DetalhesPPRestaurante />}/>
          <Route path='/Restaurante/:id'  element={<DetalhesRestaurantes/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Restaurantes" element={<Restaurantes/>}/>
          <Route path="/GestãoDeUSuários" element={<GestãoDeUSuários/>}/>
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
