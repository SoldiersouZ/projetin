const mongoose = require('mongoose');
const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);

async function conectarBanco() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado ao MongoDB Atlas com sucesso!');
  } catch (erro) {
    console.error('Erro ao conectar ao MongoDB:', erro.message);
  }
}

module.exports = conectarBanco;