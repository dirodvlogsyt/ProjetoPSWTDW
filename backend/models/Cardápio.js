const mongoose = require('mongoose');

const pratoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  categoria: { type: String, required: true, enum: ['Peixe', 'Carne', 'Vegetariano', 'Sobremesa'] },
  preco: { type: Number, required: true },
  imagemUrl: { type: String, required: true },
  descricao: String
});

const cardapioSchema = new mongoose.Schema({
  restaurante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurante',
    required: true
  },
  pratos: [pratoSchema]
});

const Cardapio = mongoose.model('Cardapio', cardapioSchema);

module.exports = Cardapio;
