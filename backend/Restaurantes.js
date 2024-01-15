const express = require('express');
const mongoose = require('mongoose');
const Restaurant = require('./models/restaurant'); 

mongoose.connect('mongodb://localhost/restaurantApp', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();


app.get('/DetalhesPPRestaurante', async (req, res) => {
  const restaurants = await Restaurant.find({});
  res.json(restaurants);
});

/* Rota para criar um novo restaurante
app.post('/restaurants', async (req, res) => {
  const newRestaurant = await Restaurant.create(req.body);
  res.json(newRestaurant);
});*/

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
