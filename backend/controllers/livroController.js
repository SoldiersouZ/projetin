const livroService = require('../services/livroService');
const Livro = require('../models/livro');

async function buscarLivro(req, res) {
  try {
    const termo = req.params.titulo || req.params.termo;

    if (!termo) {
      return res.status(400).json({ erro: true, mensagem: 'Termo de pesquisa não fornecido.' });
    }

    const resultado = await livroService.consultarOpenLibrary(termo);

    if (resultado.erro) {
      return res.status(404).json(resultado);
    }

    if (resultado.livros && resultado.livros.length > 0) {
      for (const livroData of resultado.livros) {
        await Livro.updateOne(
          { titulo: livroData.titulo },
          livroData,
          { upsert: true }
        ).catch(err => console.error('Erro ao guardar no MongoDB:', err.message));
      }
    }

    return res.json(resultado);
  } catch (erro) {
    console.error('Erro no controller:', erro);
    return res.status(500).json({ erro: true, mensagem: 'Erro interno no servidor.' });
  }
}

module.exports = {
  buscarLivro
};