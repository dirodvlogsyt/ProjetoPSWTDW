const express = require('express');
const mongoose = require('mongoose');
const Order = require('./models/order'); // Crie um modelo mongoose para Order

mongoose.connect('mongodb://localhost/orderApp', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

// Rota para listar todos os pedidos
app.get('/orders', async (req, res) => {
  const orders = await Order.find({});
  res.json(orders);
});

// Rota para criar um novo pedido
app.post('/orders', async (req, res) => {
  const newOrder = await Order.create(req.body);
  res.json(newOrder);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
