import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './DetalhesPPRestaurante.css';


function DetalhesPPRestaurante() {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    
    fetch(`http://localhost:3000/api/Restaurantes`)
      .then(res => res.json())
      .then(data => setRestaurantes(data))
      .catch(erro => console.error('Erro:', erro));
  }, []);

 
  return (
    <div className="container-de-restaurantes">
      {restaurantes.map(restaurante => (
        <div key={restaurante._id} className="item-de-restaurante">
          <Link to={`/DetalhesRestaurantes/${restaurante._id}`}>
            <img src={restaurante.imagemUrl} alt={restaurante.nome} />
          </Link>
          
        </div>
      ))}
    </div>
  );
}

export default DetalhesPPRestaurante;