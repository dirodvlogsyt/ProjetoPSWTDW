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
        setNovoRestaurante({ ...novoRestaurante, [e.target.name]: e.target.value });
    };

    const salvarRestaurante = async () => {
        if (!novoRestaurante.nome || !novoRestaurante.horario || !novoRestaurante.tipoComida || !novoRestaurante.telefone) {
            setErro('Todos os campos são obrigatórios');
            return;
        }

       
        const nomeExiste = await verificarNomeRestaurante(novoRestaurante.nome);
        if (nomeExiste) {
            setErro('Nome do restaurante já existe');
            return;
        }

       

        setErro(''); 
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
