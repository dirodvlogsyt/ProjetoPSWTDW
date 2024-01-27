import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetalhesRestaurante.css';

function DetalhesRestaurantes() {
  const { id } = useParams();
  const [restaurante, setRestaurante] = useState(null);

  useEffect(() => {
   
    fetch(`sua_api/restaurantes/${id}`)
      .then(res => res.json())
      .then(data => setRestaurante(data))
      .catch(erro => console.error('Erro:', erro));
  }, [id]);

  if (!restaurante) return <div>Carregando...</div>;

  return (
    <div>
      <h1>{restaurante.nome}</h1>
    </div>
  );
}

export default DetalhesRestaurantes;