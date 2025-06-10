## Desafio Técnico DKW System: Gabriel Lauxen

## Demonstração Frontend

<p align="center">
   <img src="./frontend/public/gifs/demonstracao-chat.gif" style="max-heigth: 500px; display: block; margin: 0 auto;">
</p>

## Demonstração Frontend com rotas funcionando:

<p align="center">
   <img src="./frontend/public/gifs/demonstracao-chat-rotas.gif" style="max-width: 1000px; display: block; margin: 0 auto;">
</p>

### Descrição do Desafio

Estamos em busca de um desenvolvedor júnior para integrar nossa equipe de tecnologia em nossa startup. Este desafio foi criado para avaliar seus conhecimentos em **React.js**, **Node.js (Express)**, **PostgreSQL** e **Sequelize**. A ideia é construir uma pequena aplicação para gerenciar interações com usuários.

### O Desafio

Você deverá criar uma aplicação simples onde os usuários podem enviar mensagens para um atendente, e o sistema deve responder com uma mensagem de confirmação. O sistema deve ser dividido em **Frontend** e **Backend**:

#### Requisitos:

1. **Frontend**:

   - Desenvolver uma interface de chat simples utilizando **React.js** e **Material-UI 14**.
   - O usuário deve ser capaz de enviar mensagens e visualizar um histórico de mensagens enviadas.
   - A interface deve ser responsiva e bem estruturada.

2. **Backend**:

   - Criar uma API utilizando **Node.js com Express**.
   - Integrar o backend com o banco de dados utilizando **Sequelize**.
   - A API deve:
     - Receber e salvar as mensagens enviadas pelos usuários no banco de dados PostgreSQL;
     - Enviar uma resposta automática simples (ex: "Mensagem recebida com sucesso!").
   - O backend deve expor rotas para o envio de mensagens e exibição do histórico.

3. **Banco de Dados**:
   - Criar um banco de dados simples em **PostgreSQL** para armazenar as mensagens enviadas pelos usuários, contendo:
     - ID da mensagem;
     - Conteúdo da mensagem;
     - Timestamp da interação.
   - A integração com o banco de dados deve ser feita utilizando **Sequelize**.

### Avaliação:

- **Frontend**: Organização do código, uso do Material-UI 14 e a experiência do usuário.
- **Backend**: Arquitetura da API, clareza e eficiência nas rotas, integração com o banco de dados usando Sequelize.
- **Banco de Dados**: Simplicidade e organização das tabelas, uso do Sequelize.

### O que Esperamos de Você:

- Capacidade de estruturar e organizar seu código de forma clara e eficiente;
- Conhecimento nas tecnologias especificadas (React.js, Node.js, Express, PostgreSQL, Sequelize);
- Uso correto do Material-UI 14 no frontend.

### Como Enviar:

- Fork o repositório e envie o link do seu repositório com a solução;
- O código deve estar bem organizado, com comentários explicando as partes principais da implementação;
- Caso não consiga finalizar algum requisito, explique o que conseguiu fazer até o momento e como faria para completar.
