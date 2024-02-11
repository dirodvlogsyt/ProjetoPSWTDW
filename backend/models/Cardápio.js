const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pratoSchema = new Schema({
  nome: { type: String, required: true },
  categoria: { type: String, required: true, enum: ['Peixe', 'Carne', 'Vegetariano', 'Sobremesa'] },
  preco: { type: Number, required: true },
  imagemUrl: { type: String, required: true },
  descricao: { type: String, required: false }
});

const cardapioSchema = new Schema({
  restauranteId: { type: Number, required: true },
  pratos: [pratoSchema]
});

const Cardapio = mongoose.model('Cardapio', cardapioSchema);

module.exports = Cardapio;
