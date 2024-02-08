import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fazerLogin } from './LoginFuncao'


 function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const [user, setUser]= useState()
   

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            
            const response = fazerLogin(email, password)
            setUser(response)
            if(user){
                navigate('/');
            }
            
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

    useEffect(()=>{
        console.log(user)
    },[user])


    return (
        <div className="login-form-wrap">
            <h1>Login</h1>
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
                <button type="submit" className="btn-login" >Login</button>
            </form>
          <p>{error}</p>
        </div>
    );
}

export default Login;
