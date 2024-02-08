import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetalhesRestaurante.css';

function DetalhesRestaurantes() {
  const { id } = useParams();
  const [restaurante, setRestaurante] = useState(null);
  const [cardapio, setCardapio] = useState([]); 

  
  useEffect(() => {
    fetch(`sua_api/restaurantes/${id}`) 
      .then(res => res.json())
      .then(data => {
        setRestaurante(data); 
        fetch(`sua_api/cardapio/${data.cardapioId}`) 
          .then(res => res.json())
          .then(data => setCardapio(data)); 
      })
      .catch(erro => console.error('Erro:', erro));
  }, [id]);

  
  if (!restaurante) return <div>Carregando...</div>; 

 
  return (
    <div className="detalhes-container">
      <h1>{restaurante.nome}</h1>
      
      <div className="cardapio-container">
        {cardapio.map(item => (
          <div key={item._id} className="cardapio-item">
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <p>Preço: {item.preco}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetalhesRestaurantes;
