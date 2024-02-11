const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); 
const routes = express.Router();
const Restaurantes = require('../models/Restaurantes');


routes.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user){
      await bcrypt.compare(password, user.password)
      res.status(200).json({ message: "Login bem-sucedido!", user });
    } else {
      res.status(401).json({ message: "User não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor" });
  }
});


routes.post('/signup', async (req, res) => {
  const { email, name , telefone, nif, morada, password } = req.body;
  console.log(email, name , telefone, nif, morada, password)
  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).send({ message: 'Usuário já existe.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      
      email,
      name,
      telefone,
      nif,
      morada,
      password: hashedPassword,
      
        });
    await newUser.save();
    res.status(201).send({ message: 'Usuário criado com sucesso!', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Erro ao criar usuário', error: error.message });
  }
});



routes.get('/DetalhesRestaurante/:restauranteId', async (req, res) => {
  
  const restauranteId = req.params.restauranteId;
  try {
    const restaurantDetails = await Restaurantes.findById(restauranteId);   
    if (restaurantDetails) {
      res.status(200).json(restaurantDetails);
    } else {
      res.status(404).send('Restaurante não encontrado');
    }
  } catch (error) {
    res.status(500).send(error);  
  }
});


routes.get('/DetalhesRestaurante', async (req, res) => {
  try {
    const restaurantDetails = await Restaurantes.find();   
    if (restaurantDetails.length > 0) {
      console.log(restaurantDetails.length)
      res.status(200).json(restaurantDetails);
    } else {
      console.log("Nenhum restaurante encontrado")
      res.status(400)
    }
  } catch (error) {
    res.status(500).send(error);
  }
});




routes.post('/Restaurantes', async (req, res) => {
  try {

    const { nome, numero, morada, tipoCozinha, horario, imagem, restauranteId } = req.body;
    const novoRestaurante = new Restaurantes({
      nome,
      numero,
      morada,
      tipoCozinha,
      horario,
      imagem,
      restauranteId
    });

    await novoRestaurante.save();
    res.status(201).send('Restaurante criado com sucesso');
  } catch (error) {

    res.status(500).send('Erro ao criar restaurante');
  }
});



routes.put('/Restaurantes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, numero, morada, tipoCozinha, rating, horario } = req.body;

    const restauranteAtualizado = await Restaurantes.findByIdAndUpdate(id, {
      nome,
      numero,
      morada,
      tipoCozinha,
      rating,
      horario
    }, { new: true }); 

    if (!restauranteAtualizado) {
      return res.status(404).send('Restaurante não encontrado');
    }

    res.json(restauranteAtualizado);
  } catch (error) {
    res.status(500).send('Erro no servidor');
  }
});


routes.delete('/restaurantes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const restauranteDeletado = await Restaurantes.findByIdAndDelete(id);

    if (!restauranteDeletado) {
      return res.status(404).send('Restaurante não encontrado');
    }

    res.send('Restaurante removido com sucesso');
  } catch (error) {
    res.status(500).send('Erro no servidor');
  }
});

const verificarAdmin = (req, res, next) => {
 
  if (req.user && req.user.role === 'ADMIN') {
    next();
  } else {
    res.status(403).send('Acesso negado');
  }
};

routes.post('/cardapio', async (req, res) => {
  try {
    const { restauranteId, pratos } = req.body;
    const novoCardapio = new Cardapio({
      restaurante: restauranteId,
      pratos
    });

    await novoCardapio.save();
    res.status(201).send('Cardápio criado com sucesso');
  } catch (error) {
    res.status(500).send('Erro ao criar cardápio');
  }
});


routes.get('/cardapio/:restauranteId?', async (req, res) => {
  try {
    const { restauranteId } = req.params;
    const query = restauranteId ? { restaurante: restauranteId } : {};
    const cardapios = await Cardapio.find(query).populate('pratos');
    
    res.status(200).json(cardapios);
  } catch (error) {
    res.status(500).send('Erro ao buscar cardápios');
  }
});



module.exports= routes;