import React from 'react';
import { Navigate, useHistory } from 'react-router-dom';
import './DetalhesRestaurante.css';
import DetalhesRestaurante from './DetalhesRestaurantes';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';

const DetalhesPPRestaurante = () => {
  let navigate = useNavigate();

  const handleVerMenuClick = () => {
  
    navigate('/DetalhesRestaurantes');
    
  };

  return (
    <div className="restaurant-details">
      <a href="/DetalhesRestaurantes">
      <img src="telepizza.png" alt="Restaurant 1" />
    </a>
  
      <a href="/DetalhesRestaurantes">
      <img src="pizzahut.png" alt="Restaurant 2" />
      </a>

      <a href="/DetalhesRestaurantes">
      <img src="bk.png" alt="Restaurant 3" />
      </a>
      <a href="/DetalhesRestaurantes">
      <img src="mc.png" alt="Restaurant 4" />
      </a>

    </div>


  );
};

export default DetalhesPPRestaurante;

