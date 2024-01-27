import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        telefone: '',
        nif: '',
        morada: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/signup', formData, {
                headers: { 'Content-Type': 'application/json' },
            });
            
            console.log(response.data);
            navigate('/DetalhesPPRestaurante'); 
        } catch (error) {
            setError(error.response?.data?.message || 'Erro ao realizar cadastro.');
        }
    };

    return (
        <div>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Senha" required />
                <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Telefone" />
                <input type="text" name="nif" value={formData.nif} onChange={handleChange} placeholder="NIF" required />
                <input type="text" name="morada" value={formData.morada} onChange={handleChange} placeholder="Morada" required />
                <button type="submit">Cadastrar</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default SignUp;
