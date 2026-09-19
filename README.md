# 📚 Projetin — Pesquisa de Livros

Projeto acadêmico de busca de livros utilizando a **Open Library API**.

## 🧱 Arquitetura

```
frontend/  →  backend (Node.js + Express)  →  Open Library API
```

- O frontend **não** acessa a Open Library diretamente.
- Toda a comunicação externa acontece exclusivamente no **service**.

## 🚀 Como rodar

### 1. Backend

```bash
cd backend
npm install
npm run dev     # ou npm start
```

O servidor roda em `http://localhost:3000`.

### 2. Frontend

Abra o arquivo `frontend/index.html` no navegador (ou use Live Server).

## 📡 Rotas da API

| Método | Rota                    | Descrição                        |
|--------|-------------------------|----------------------------------|
| GET    | `/api/status`           | Verifica se a API está no ar     |
| GET    | `/api/livros/pesquisa?titulo=` | Busca livros pelo título   |

## 📄 Códigos HTTP

| Código | Situação                     |
|--------|------------------------------|
| 200    | Pesquisa realizada           |
| 400    | Título não informado         |
| 404    | Nenhum livro encontrado      |
| 500    | Erro interno ao consultar API|

## 👥 Integrantes


| Nomes                     |
|---------------------------|
| Igor Paulo Rezende        |
| Jayrone Oliveira          |
| Cauã Oliveira             |
| Guilherme Souza           |
