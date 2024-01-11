import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha:'',
    telefone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nome.trim()) {
      alert('Por favor, preencha o nome.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Por favor, insira um email válido.');
      return;
    }
    if(!formData.senha.trim()){
      alert('Por favor insira uma senha valida.')
    }

    if (!/^\d{9}$/.test(formData.telefone)) {
      alert('O número de telefone deve ter 9 números.');
      return;
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
    <form onSubmit={handleSubmit} className="signup-form">
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </div>
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
          type="senha"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-button">Registrar</button>
    </form>
  );
};

export default SignUp;
