import React, { useState } from 'react';
import './Restaurantes.css';

const RestaurantesAdmin = ({ isAdmin, verificarNomeRestaurante }) => {
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
          const resposta = await fetch('/caminho_da_sua_api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              nome: nomeRestaurante,
              horario: horarioRestaurante,
              tipo: tipoComida,
              telefone: telefoneRestaurante
            }),
          });
          const dados = await resposta.json();
          
        } catch (error) {
          console.error('Erro ao salvar restaurante:', error);
        }
      };
      

const atualizarRestaurante = async (id, dadosAtualizados) => {
  try {
    const resposta = await fetch(`/api/restaurantes/${id}`, {
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
    const resposta = await fetch(`/api/restaurantes/${id}`, {
      method: 'DELETE'
    });
    if (resposta.ok) {
      
    }
  } catch (error) {
    console.error('Erro ao apagar restaurante:', error);
  }
};


    if (!isAdmin) {
        return <p>Acesso negado. Apenas administradores podem acessar esta página.</p>;
    }

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

export default RestaurantesAdmin;
