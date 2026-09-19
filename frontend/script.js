document.addEventListener("DOMContentLoaded", function () {
  const elementosAnimados = document.querySelectorAll(".escondido-scroll");

  const observador = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visivel");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elementosAnimados.forEach(elemento => {
    observador.observe(elemento);
  });

  const inputBusca = document.querySelector('#busca-livro');
  const btnBuscar = document.querySelector('#btn-buscar');
  const livrosGrid = document.querySelector('.livros-grid');

  if (btnBuscar && inputBusca && livrosGrid) {
    btnBuscar.addEventListener('click', realizarBusca);
    inputBusca.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') realizarBusca();
    });
  }

  async function realizarBusca() {
    const termo = inputBusca.value.trim();
    if (!termo) return;

    btnBuscar.disabled = true;
    btnBuscar.innerText = 'BUSCANDO...';

    try {
      const resposta = await fetch(`http://localhost:3000/api/livros/${encodeURIComponent(termo)}`);
      const dados = await resposta.json();

      if (dados.erro) {
        alert(dados.mensagem || 'Livro não encontrado.');
        return;
      }

      livrosGrid.innerHTML = '';

      const lista = dados.livros || [dados];

      lista.forEach(livro => {
        const capaUrl = livro.capa || 'https://via.placeholder.com/300x400?text=Sem+Capa';

        const novoCard = document.createElement('article');
        novoCard.className = 'livro-card';
        novoCard.innerHTML = `
          <div class="livro-capa">
            <img src="${capaUrl}" alt="Capa de ${livro.titulo}" onerror="this.onerror=null; this.src='https://via.placeholder.com/300x400?text=Sem+Capa'">
          </div>
          <div class="livro-info">
            <span class="livro-tipo">LIVRO</span>
            <h3>${livro.titulo}</h3>
            <p>${livro.autor}</p>
            <span class="livro-ano">${livro.ano}</span>
            <button class="livro-btn">VER LIVRO</button>
          </div>
        `;

        livrosGrid.appendChild(novoCard);
      });

      inputBusca.value = '';
    } catch (erro) {
      console.error('Erro na requisição:', erro);
      alert('Erro ao ligar ao servidor backend.');
    } finally {
      btnBuscar.disabled = false;
      btnBuscar.innerText = 'BUSCAR';
    }
  }
});