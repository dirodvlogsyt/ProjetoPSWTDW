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
  const { name, email, password, nif, morada, telefone } = req.body;
  console.log(name, email, password, nif, morada, telefone)
  try {
    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).send({ message: 'Usuário já existe.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      nif,
      morada,
      telefone
        });
    await newUser.save();
    res.status(201).send({ message: 'Usuário criado com sucesso!', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Erro ao criar usuário', error: error.message });
  }
});

routes.get('/DetalhesRestaurante', async (req, res) => {
  

  const restaurantId = req.query.id;

  try {
   
    const restaurantDetails = await Restaurant.findById(restaurantId);

   
    if (restaurantDetails) {
      res.status(200).json(restaurantDetails);
    } else {
      res.status(404).send('Restaurante não encontrado');
    }
  } catch (error) {
  
    res.status(500).send('Server error');
  }
});
routes.post('/Restaurantes', async (req, res) => {
  try {
    const novoRestaurante = new Restaurantes(req.body);
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




routes.get('/Restaurantes', verificarAdmin, (req, res) => {
  res.send('Esta é uma área restrita para administradores.');
});

module.exports= routes;