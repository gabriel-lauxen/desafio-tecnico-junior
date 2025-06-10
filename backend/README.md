# Backend - Desafio Técnico Júnior

Este projeto é um backend simples para envio e listagem de mensagens.

## Rotas Disponíveis

### `POST /messages`

Envia uma nova mensagem e salva no banco de dados.

- **Request Body:**
  ```json
  {
    "content": "Sua mensagem aqui"
  }
  ```
- **Resposta:**
  ```json
  {
    "message": "Mensagem recebida com sucesso!",
    "data": {
      "id": 29,
      "content": "Agora estou testando o post",
      "updatedAt": "2025-06-10T18:31:47.878Z",
      "createdAt": "2025-06-10T18:31:47.878Z"
    }
  }
  ```

---

### `GET /messages`

Lista o histórico de mensagens salvas.

- **Resposta:**
  ```json
  [
    {
      "id": 1,
      "content": "Oi, tudo bem?",
      "createdAt": "2025-06-10T17:48:49.868Z",
      "updatedAt": "2025-06-10T17:48:49.868Z"
    },
    {
      "id": 2,
      "content": "Oi! Tudo sim, e você?",
      "createdAt": "2025-06-10T17:48:49.868Z",
      "updatedAt": "2025-06-10T17:48:49.868Z"
    }
  ]
  ```

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   npm start
   ```

---

Feito com 💙 para o desafio técnico.
