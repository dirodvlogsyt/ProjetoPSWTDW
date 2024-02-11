export const fazerLogin = (email, password) => {
    fetch('http://localhost:5000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Houve um problema com a solicitação de login:', error);
    });
  };

  export const fazerSignup = ( email, name , telefone, nif, morada, password,Idrestaurante)=>{
    fetch('http://localhost:5000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        name: name,
        telefone: telefone,
        nif:nif,
        morada:morada,
        password: password,
        Idrestaurante: Idrestaurante
      })

    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data); 
    })
    .catch(error => {
      console.error('Houve um problema com o cadastro:', error);
    });

  }


  export const getTodosOsRestaurantes = () => {
    return fetch('http://localhost:5000/user/DetalhesRestaurante', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
  }


  export const buscarCardapio = async (idRestaurante) => {
    try {
      const response = await fetch(`http://localhost:5000/restaurante/cardapio/${idRestaurante}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Houve um problema com a solicitação do cardápio:', error);
    }
  };
  
export const buscarOpcoesDoItem = (itemId) => {
  return fetch(`http://localhost:5000/restaurante/cardapio/opcoes/${itemId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Falha ao buscar opções do item');
      }
      return response.json();
    })
    .catch(error => console.error('Erro na API:', error));
};

export const adicionarTagAoUsuario = async (userId, tag) => {
 
  try {
    const response = await fetch(`http://localhost:5000/user/${userId}/tags`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tag }),
    });
    return response.json();
  } catch (error) {
    console.error('Erro ao adicionar tag:', error);
  }
};

export const removerTagDoUsuario = async (userId, tag) => {
  try {
    const response = await fetch(`http://localhost:5000/user/${userId}/tags`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tag }),
    });
    return response.json();
  } catch (error) {
    console.error('Erro ao remover tag:', error);
  }
};

export const fetchUsers = async () => {
  try {
    const response = await fetch('http://localhost:5000/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
};
