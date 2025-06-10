"use strict";
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Messages",
      [
        {
          content: "Oi, tudo bem?",
          isUser: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Sim, tudo ótimo! E você?",
          isUser: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Estou bem também, obrigado por perguntar.",
          isUser: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Como posso ajudar você hoje?",
          isUser: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Preciso de informações sobre o projeto.",
          isUser: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Claro! Sobre qual parte do projeto você gostaria de saber?",
          isUser: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Message", null, {});
  },
};
