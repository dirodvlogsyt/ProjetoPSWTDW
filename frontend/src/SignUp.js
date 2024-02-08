import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fazerSignup } from './LoginFuncao';
import { getTodosOsRestaurantes } from './LoginFuncao'
//id + 1

function SignUp() {
    const [morada, setMorada] = useState()
    const [nif, setNif] = useState()
    const [telefone, setTelefone] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [newUser, setNewUser] = useState()
    const [error, setError] = useState('');
    const [restaurantes, setRestaurantes] = useState()
    const [Idrestaurante, setIdRestaurante] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRestaurantes = async () => {
          try {
            const todosOsRestaurantes = await getTodosOsRestaurantes();
            setRestaurantes(todosOsRestaurantes);
          } catch (error) {
            console.error('Erro ao buscar os restaurantes:', error);
          }
        };
      
        fetchRestaurantes();
      }, []);

      useEffect(()=>{
        if(restaurantes){
            setIdRestaurante(restaurantes.length  + 1)
        }
      },restaurantes)
      

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //restauanteId
            console.log("1")
            const User = fazerSignup( email, name , telefone, nif, morada, password)
            console.log("2")
            setNewUser(User)
            navigate('/'); 
        } catch (error) {
            setError(error.response?.data?.message || 'Erro ao realizar cadastro.');
        }
    };

    useEffect(()=>{
        console.log(email)
    },[email])
    
    useEffect(()=>{
        console.log(newUser)
    },[newUser])

    return (
        <div>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
                <input type="text" name="telefone" onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone" />
                <input type="text" name="nif" onChange={(e) => setNif(e.target.value)} placeholder="NIF" required />
                <input type="text" name="morada" onChange={(e) => setMorada(e.target.value)} placeholder="Morada" required />
                <button type="submit">Cadastrar</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}


export default SignUp;
