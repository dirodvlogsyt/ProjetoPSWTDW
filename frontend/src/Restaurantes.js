import React, { useState } from 'react';
import './Restaurantes.css';



const Restaurantes = () => {
    const [restaurantes, setRestaurantes] = useState([]);
    const [novoRestaurante, setNovoRestaurante] = useState({
        nome: '',
        horario: '',
        tipoComida: '',
        telefone: ''
    });
    const [erro, setErro] = useState('');

    const handleChange = (e) => {
        setNovoRestaurante({ ...
            
            novoRestaurante, [e.target.name]: e.target.value });
    };
    
    const salvarRestaurante = async () => {
      try {
          const resposta = await fetch('', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(novoRestaurante),
          });
          const dados = await resposta.json();
          
      } catch (error) {
          console.error('Erro ao salvar restaurante:', error);
      }
  };
  
      

const atualizarRestaurante = async (id, dadosAtualizados) => {
  try {
    const resposta = await fetch(`http://localhost:5000/restaurantes/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dadosAtualizados)
    });
    if (resposta.ok) {
     
    }
  } catch (error) {
    console.error('Erro ao atualizar restaurante:', error);
  }
};


const apagarRestaurante = async (id) => {
  try {
    const resposta = await fetch(`http://localhost:5000/restaurantes/${id}`, {
      method: 'DELETE'
    });
    if (resposta.ok) {
      
    }
  } catch (error) {
    console.error('Erro ao apagar restaurante:', error);
  }
};


    return (
        <div className="restaurantes-admin">
            {erro && <p className="erro">{erro}</p>}
            <form>
                <input type="text" name="nome" placeholder="Nome do Restaurante" onChange={handleChange} value={novoRestaurante.nome} />
                <input type="text" name="horario" placeholder="Horário de Funcionamento" onChange={handleChange} value={novoRestaurante.horario} />
                <input type="text" name="tipoComida" placeholder="Tipo de Comida" onChange={handleChange} value={novoRestaurante.tipoComida} />
                <input type="text" name="telefone" placeholder="Número de Telefone" onChange={handleChange} value={novoRestaurante.telefone} />
                <button type="button" onClick={salvarRestaurante}>Salvar Restaurante</button>
            </form>
        </div>
    );
};

export default Restaurantes;
