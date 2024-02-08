import React, { useEffect, useState } from 'react';
import './DetalhesPPRestaurante.css';
import { getTodosOsRestaurantes } from './LoginFuncao'


function DetalhesPPRestaurante() {
  const [restaurantes, setRestaurantes] = useState([]);

useEffect(()=>{
  const obterRestaurantes= async ()=>{
    const restaurantes = await getTodosOsRestaurantes()
    try{
    setRestaurantes(restaurantes)
    }
    catch{
      console.log("Problema no get dos restaurantes")
    }
  }

  obterRestaurantes()
})

useEffect(()=>{
console.log(restaurantes)
},[])

 
  return (
<div>   
  <h1>Bem Vindo !!!</h1>

   <ul className="lista">
      {restaurantes.map(restaurante => (
        <li className='galeria'>
        <div >
          <h2>{restaurante.nome}</h2>
          <h2>{restaurante.numero}</h2>

            <img className='img' src={restaurante.imagem} alt={restaurante.nome} />
        </div>
</li>
      ))}
      </ul>
    </div>
  );
}

export default DetalhesPPRestaurante;