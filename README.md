# 📚 Projetin — Pesquisa de Livros

Projeto acadêmico de **pesquisa de livros** utilizando a **Open Library API**, desenvolvido com frontend, backend em Node.js e Express.

A aplicação permite pesquisar livros pelo título e visualizar informações retornadas pela Open Library.

---

## 🎨 Identidade visual

O site possui uma identidade visual inspirada em **Ayrton Senna**, utilizada para compor a apresentação e o design da aplicação.

Na interface estão presentes:

* 🏎️ O nome **Ayrton Senna** como destaque visual;
* 🏆 **Três troféus**, representando os três campeonatos mundiais de Fórmula 1 conquistados por Senna;
* 📸 **Imagens de Ayrton Senna** utilizadas na composição visual da página;
* 🎨 Elementos visuais relacionados ao automobilismo para complementar o design.

Esses elementos fazem parte da **apresentação visual do projeto**, enquanto a funcionalidade principal da aplicação permanece sendo a **pesquisa de livros através da Open Library API**.

---

## 🧱 Arquitetura

```text
Frontend → Backend (Node.js + Express) → Open Library API
```

O frontend **não acessa a Open Library diretamente**.

Toda comunicação com a API externa é realizada pelo backend, que recebe as solicitações do frontend, consulta a Open Library e retorna os resultados para a aplicação.

---

## 🚀 Funcionalidades

* 🔎 Pesquisa de livros pelo título
* 📚 Exibição dos livros encontrados
* 🖼️ Exibição das capas disponíveis
* 👤 Informações sobre autores
* 📅 Informações de publicação
* ⚡ Comunicação entre frontend e backend
* 🌐 Integração com a Open Library API
* 🛡️ Tratamento de erros

---

## 🛠️ Tecnologias utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### API

* Open Library API

---

## 📂 Estrutura do projeto

```text
projetin/
│
├── backend/
│   ├── ...
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## 🚀 Como rodar

### 1. Clone o repositório

```bash
git clone https://github.com/SoldiersouZ/projetin.git
cd projetin
```

### 2. Instale as dependências

```bash
cd backend
npm install
```

### 3. Inicie o backend

```bash
npm run dev
```

ou:

```bash
npm start
```

O servidor será iniciado em:

```text
http://localhost:3000
```

### 4. Abra o frontend

Abra o arquivo:

```text
frontend/index.html
```

no navegador ou utilize o **Live Server** do VS Code.

---

## 📡 Rotas da API

| Método | Rota                           | Descrição                    |
| ------ | ------------------------------ | ---------------------------- |
| `GET`  | `/api/status`                  | Verifica se a API está no ar |
| `GET`  | `/api/livros/pesquisa?titulo=` | Busca livros pelo título     |

### Exemplo

```http
GET /api/livros/pesquisa?titulo=Ayrton%20Senna
```

---

## 📊 Códigos HTTP

| Código | Situação                        |
| -----: | ------------------------------- |
|  `200` | Pesquisa realizada com sucesso  |
|  `400` | Título não informado            |
|  `404` | Nenhum livro encontrado         |
|  `500` | Erro interno ao consultar a API |

---

## 👥 Integrantes

| Nome                   |
| ---------------------- |
| **Igor Paulo Rezende** |
| **Jayrone Oliveira**   |
| **Cauã Oliveira**      |
| **Guilherme Souza**    |

---

<p align="center">
  📚 Projetin — Pesquisa de Livros
</p>
