import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Por favor, insira um email válido.');
      return;
    }
    if(!formData.senha.trim()){
      alert('Por favor insira uma senha valida.')
    }
    const registroBemSucedido = true; 

    if (registroBemSucedido) {
      alert('Registro bem-sucedido! Você será redirecionado.');
      setTimeout(() => {
        
        window.location.href = '/DetalhesPPRestaurante'; 
      }, 2000);
    } else {
     
    }
  };
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
