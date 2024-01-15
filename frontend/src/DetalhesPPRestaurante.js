import React from 'react';
import { Navigate, useHistory } from 'react-router-dom';
import './DetalhesRestaurante.css';
import DetalhesRestaurante from './DetalhesRestaurantes';
import { useNavigate } from 'react-router-dom';

const DetalhesPPRestaurante = () => {
  let navigate = useNavigate();

  const handleVerMenuClick = () => {
  
    navigate('/DetalhesRestaurantes');
  };

  return (
    <div className="restaurant-details">
      <img src="restaurant1.jpg" alt="Restaurant 1" />
      <h2>Nome do Restaurante 1</h2>
      <p>Tipo de restaurante e tipo de cozinha</p>
      <p>Numero</p>
      <button onClick={handleVerMenuClick}>Ver Menu Completo</button>
    </div>

  );
};

export default DetalhesPPRestaurante;

