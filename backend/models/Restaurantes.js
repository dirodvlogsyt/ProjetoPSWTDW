const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestauranteSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  numero: {
    type: Number,
    required: true
  },
  morada: {
    type: String,
    required: true
  },
  tipoCozinha: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  horario: {
    type: String,
    required: true
  },
  imagem: {
    type: String,
    require: false
  },
  id: {
    type: Number,
    require: true
  }}
);

const Restaurante = mongoose.model('Restaurante', RestauranteSchema);

module.exports = Restaurante;
