# 📚 Projetin — Pesquisa de Livros

Projeto acadêmico de **pesquisa de livros** desenvolvido com **Node.js, Express e Open Library API**.

A aplicação permite pesquisar livros pelo título e apresentar os resultados obtidos através da Open Library, utilizando uma arquitetura organizada entre frontend, backend e serviços externos.

---

## 🎨 Identidade visual

A interface do Projetin possui uma identidade visual inspirada em **Ayrton Senna**.

A página apresenta elementos relacionados ao piloto brasileiro, utilizados como parte da composição visual do projeto:

* 🏎️ Nome **Ayrton Senna** em destaque;
* 🏆 **Três troféus**, representando seus três títulos mundiais de Fórmula 1;
* 📸 **Imagens de Ayrton Senna** distribuídas pela interface;
* 🏁 Elementos visuais relacionados ao automobilismo.

Esses elementos fazem parte da **apresentação e identidade visual do site**. A funcionalidade principal do projeto continua sendo a **pesquisa de livros através da Open Library API**.

---

## 🧱 Arquitetura

O projeto utiliza uma arquitetura dividida em **Frontend, Backend e serviço externo**:

```text
┌─────────────────────┐
│      FRONTEND       │
│    HTML / CSS / JS  │
└──────────┬──────────┘
           │
           │ HTTP
           ▼
┌─────────────────────┐
│       BACKEND       │
│   Node.js / Express │
│                     │
│ Controllers         │
│ Routes              │
│ Services            │
│ Models              │
│ Config              │
└──────────┬──────────┘
           │
           │ HTTP
           ▼
┌─────────────────────┐
│   OPEN LIBRARY API  │
└─────────────────────┘
```

O **frontend não acessa diretamente a Open Library**.

Toda comunicação com a API externa é realizada pelo backend, mantendo a separação de responsabilidades entre as diferentes camadas da aplicação.

---

## 🔄 Fluxo da aplicação

```text
Usuário
   │
   │ Pesquisa um livro
   ▼
Frontend
   │
   │ Requisição HTTP
   ▼
Routes
   │
   ▼
Controller
   │
   ▼
Service
   │
   │ Consulta externa
   ▼
Open Library API
   │
   │ Retorna dados
   ▼
Service
   │
   ▼
Controller
   │
   ▼
Frontend
   │
   ▼
📚 Resultados dos livros
```

---

## 🗂️ Estrutura do projeto

```text
projetin-main/
│
├── .vscode/
│   └── settings.json
│
├── backend/
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   └── livroController.js
│   │
│   ├── models/
│   │   └── livro.js
│   │
│   ├── routes/
│   │   └── livroRoutes.js
│   │
│   └── services/
│       └── livroService.js
│
├── frontend/
│   ├── assets/
│   ├── frames/
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── script.js
│   ├── server.js
│   └── style.css
│
├── referencias/
│   ├── arquitetura.txt
│   ├── checklist.txt
│   ├── evidencias da entrega.txt
│   ├── requisitos.txt
│   └── resultado esperado.txt
│
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

### 📁 Principais diretórios

| Diretório             | Função                                                        |
| --------------------- | ------------------------------------------------------------- |
| `backend/config`      | Configurações utilizadas pelo backend                         |
| `backend/controllers` | Controladores responsáveis pelo processamento das requisições |
| `backend/models`      | Modelos utilizados pela aplicação                             |
| `backend/routes`      | Definição das rotas da API                                    |
| `backend/services`    | Comunicação e regras relacionadas aos serviços externos       |
| `frontend`            | Interface e arquivos do cliente                               |
| `frontend/assets`     | Recursos visuais utilizados pela interface                    |
| `frontend/frames`     | Elementos utilizados na composição da interface               |
| `referencias`         | Documentação e materiais de referência do projeto             |

---

## ✨ Funcionalidades

* 🔎 Pesquisa de livros pelo título;
* 📚 Exibição dos resultados encontrados;
* 🖼️ Exibição de capas disponíveis;
* 👤 Informações sobre autores;
* 📅 Informações de publicação;
* 🌐 Integração com a Open Library API;
* ⚡ Comunicação entre frontend e backend;
* 🛡️ Tratamento de erros;
* 🏎️ Interface personalizada com identidade visual inspirada em Ayrton Senna.

---

## 🛠️ Tecnologias utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### API externa

* Open Library API

---

# 🚀 Como executar

## 1. Clone o repositório

```bash
git clone https://github.com/SoldiersouZ/projetin.git
```

Entre na pasta:

```bash
cd projetin
```

---

## 2. Instale as dependências

Na raiz do projeto:

```bash
npm install
```

Caso seja necessário instalar as dependências do frontend:

```bash
cd frontend
npm install
```

---

## 3. Configure as variáveis de ambiente

Crie ou configure o arquivo `.env` na raiz do projeto de acordo com as configurações utilizadas pelo projeto.

> ⚠️ Não compartilhe informações sensíveis presentes no `.env`. O arquivo deve permanecer protegido pelo `.gitignore`.

---

## 4. Inicie o servidor

Na raiz do projeto:

```bash
npm run dev
```

ou:

```bash
npm start
```

O endereço padrão do servidor é:

```text
http://localhost:3000
```

---

# 📡 Rotas da API

| Método | Rota                           | Descrição                   |
| ------ | ------------------------------ | --------------------------- |
| `GET`  | `/api/status`                  | Verifica o status da API    |
| `GET`  | `/api/livros/` | Pesquisa livros pelo título |

### 🔎 Exemplo de pesquisa

```http
GET /api/livros/Harry
```

O backend recebe o título pesquisado, processa a solicitação através da camada de serviço e realiza a consulta à Open Library.

---

# 📊 Códigos HTTP

| Código | Situação                                    |
| -----: | ------------------------------------------- |
|  `200` | Pesquisa realizada com sucesso              |
|  `400` | Título não informado ou requisição inválida |
|  `404` | Nenhum livro encontrado                     |
|  `500` | Erro interno ao consultar a API             |

---

# 📚 Open Library

O Projetin utiliza a **Open Library API** como fonte externa para realizar as pesquisas de livros.

A API fornece informações bibliográficas e permite realizar pesquisas por diferentes critérios.

🔗 [Documentação da Open Library API](https://openlibrary.org/developers/api)

---

# 🎓 Objetivo acadêmico

O projeto foi desenvolvido com o objetivo de aplicar conhecimentos de **desenvolvimento web, arquitetura de aplicações e integração com APIs externas**.

Durante o desenvolvimento foram trabalhados conceitos como:

* Desenvolvimento Frontend;
* Desenvolvimento Backend;
* Node.js;
* Express;
* APIs REST;
* Requisições HTTP;
* JSON;
* Integração com APIs externas;
* Separação de responsabilidades;
* Organização de código;
* Tratamento de erros.

---

# 👥 Integrantes

| Nome                   |
| ---------------------- |
| **Igor Paulo Rezende** |
| **Jayrone Oliveira**   |
| **Cauã Oliveira**      |
| **Guilherme Souza**    |

---

## 🏁 Projetin

**Pesquisa de livros com uma identidade visual inspirada em Ayrton Senna.**

📚 Desenvolvido para fins acadêmicos.
