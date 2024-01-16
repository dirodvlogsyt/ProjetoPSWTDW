const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));


app.use(express.json());



app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});