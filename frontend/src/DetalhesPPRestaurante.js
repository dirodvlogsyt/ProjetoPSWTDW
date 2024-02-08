import React, { useEffect, useState } from 'react';
import './DetalhesPPRestaurante.css';
import { getTodosOsRestaurantes } from './LoginFuncao'
import { useNavigate } from 'react-router-dom';





function DetalhesPPRestaurante() {


  const navigate = useNavigate()

  const [restaurantes, setRestaurantes] = useState([]);

useEffect(()=>{
  const obterRestaurantes= async ()=>{
    const restaurantess = await getTodosOsRestaurantes()
    

    try{
    setRestaurantes(restaurantess)
    }
    catch{
      console.log("Problema no get dos restaurantes")
    }
  }

  obterRestaurantes()
},[])




useEffect(()=>{
  console.log(restaurantes)
},[restaurantes])

const restaurantLink =(id)=>{
  navigate(`/Restaurante/${id}`)
}

 
  return (
<div>   
  <h1>Bem Vindo !!!</h1>
   <ul className="lista">
      {restaurantes ? restaurantes.map(restaurante => (
        <li className='galeria' onClick={() => { restaurantLink(restaurante.id)}}>
          {console.log(restaurante.id)}
        <div >
          <h2 className='gg'>{restaurante.nome}</h2>
          <h2 className='gg'>{restaurante.tipoCozinha}</h2>
          <img className='img' src={restaurante.imagem} alt={restaurante.nome} />
          <h2 className='ggy'>{restaurante.morada}📍</h2>
          {restaurante.rating == 1 ?
          <span className="rat">Rating: ⭐</span>
        :
        null}
        {restaurante.rating == 2 ?
          <span className="rat">Rating: ⭐⭐</span>
        :
        null}
        {restaurante.rating == 3 ?
          <span className="rat">Rating: ⭐⭐⭐</span>
        :
        null}
        {restaurante.rating == 4 ?
          <span className="rat">Rating: ⭐⭐⭐⭐</span>
        :
        null}
        {restaurante.rating == 5 ?
          <span className="rat">Rating: ⭐⭐⭐⭐⭐</span>
        :
        null}

        </div>
</li>
      ))
    :
    null }
      </ul>
    </div>
  );
}

export default DetalhesPPRestaurante;