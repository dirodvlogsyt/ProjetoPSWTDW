export const fazerLogin = (email, password) => {
    fetch('http://localhost:3000/user/login', {
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
      console.log(data); // Você pode lidar com os dados da resposta aqui
    })
    .catch(error => {
      console.error('Houve um problema com a solicitação de login:', error);
    });
  };

  export const fazerSignup = ( email, name , telefone, nif, morada, password)=>{
    fetch('http://localhost:3000/user/signup', {
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
  