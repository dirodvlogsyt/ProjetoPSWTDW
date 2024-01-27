const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); 
const routes = express.Router();


routes.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user && await bcrypt.compare(password, user.password)) {
      res.status(200).json({ message: "Login bem-sucedido!", user });
    } else {
      res.status(401).json({ message: "Credenciais inválidas" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor" });
  }
});


routes.post('/signup', async (req, res) => {
  const { name, email, password, nif, morada } = req.body;
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
      morada
    });
    await newUser.save();
    res.status(201).send({ message: 'Usuário criado com sucesso!', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Erro ao criar usuário', error: error.message });
  }
});

module.exports = routes;
