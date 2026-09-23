const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    default: ''
  },
  ano: {
    type: String,
    default: ''
  },
  capa: {
    type: String,
    default: ''
  },
  consultadoEm: {
    type: Date,
    default: Date.now
  }
});

const Livro = mongoose.model('Livro', livroSchema);

module.exports = Livro;