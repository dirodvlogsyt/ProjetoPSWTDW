import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TopMenu.css';

const TopMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Login');
  };

  const handleSignUp = () => {
    navigate('/SignUp');
  };


  const handleCart = () => {
    navigate('/Cart');
  };

  const handleReturn= ()=>{
    navigate('')
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('userName');

  };
  

  return (
    <div className="top-menu">
     
      {!isLoggedIn && (
        <>
          <button className="login-button" onClick={handleLogin}>Login</button>
          <button className="signup-button" onClick={handleSignUp}>Sign Up</button>
          <button className="cart-button" onClick={handleCart}>Carrinho</button>
          <button className="Return-button" onClick={handleReturn}>Return</button>
        </>
      )}
      {isLoggedIn && (
        <>
          <div className="user-display">, {localStorage.getItem('userName')}</div>
          <button className="logout-button" onClick={handleLogout}>
            <span className="logout-icon">🚪</span>
          </button>
        </>
      )}
    </div>
  );
};

export default TopMenu;
