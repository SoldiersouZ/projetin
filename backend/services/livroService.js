const { fetch, ProxyAgent } = require('undici');

const USAR_PROXY = false;
const proxyAgent = USAR_PROXY
  ? new ProxyAgent('http://172.16.0.253:3128')
  : undefined;

async function consultarOpenLibrary(termo) {
  const opcoes = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'application/json'
    }
  };

  if (proxyAgent) {
    opcoes.dispatcher = proxyAgent;
  }

  try {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(termo)}&limit=10`;
    const resposta = await fetch(url, opcoes);

    if (!resposta.ok) {
      return { erro: true, mensagem: 'Serviço da Open Library temporariamente indisponível.' };
    }

    const dados = await resposta.json();

    if (!dados.docs || dados.docs.length === 0) {
      return { erro: true, mensagem: 'Nenhum livro encontrado com este termo.' };
    }

    const primeirosLivros = dados.docs.slice(0, 4);

    const listaLivros = primeirosLivros.map((livro) => {
      const isbn = livro.isbn ? livro.isbn[0] : null;
      let urlCapa = 'https://via.placeholder.com/300x400?text=Sem+Capa';

      if (livro.cover_i) {
        urlCapa = `https://covers.openlibrary.org/b/id/${livro.cover_i}-M.jpg`;
      } else if (isbn) {
        urlCapa = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
      }

      return {
        titulo: livro.title || 'Título indisponível',
        autor: livro.author_name ? livro.author_name.slice(0, 2).join(', ') : 'Autor desconhecido',
        ano: livro.first_publish_year ? livro.first_publish_year.toString() : 'N/A',
        capa: urlCapa
      };
    });

    return {
      erro: false,
      livros: listaLivros
    };
  } catch (erro) {
    console.error('Erro de conexão com a Open Library:', erro.message);
    return { erro: true, mensagem: 'Falha de conexão com a Open Library. Tente novamente.' };
  }
}

module.exports = {
  consultarOpenLibrary
};