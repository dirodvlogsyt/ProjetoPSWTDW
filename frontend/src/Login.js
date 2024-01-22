import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/login', 
                { email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );

            setUser(response.data); 
            navigate('/DetalhesPPRestaurante');
        } catch (error) {
            if (!error.response) {
                setError('Não foi possível conectar ao servidor.');
            } else if (error.response?.status === 401) {
                setError('Email ou senha incorretos.');
            } else {
                setError('Erro de login.');
            }
        }
    };

    return (
        <div className="login-form-wrap">
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="btn-login">Login</button>
            </form>
          <p>{error}</p>
        </div>
    );
}

export default Login;
