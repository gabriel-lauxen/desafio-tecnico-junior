"use strict";
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Messages",
      [
        {
          content: "Oi, tudo bem?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Oi! Tudo sim, e você?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Também estou bem, obrigado por perguntar.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Que bom! Como foi seu dia?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Foi tranquilo, trabalhei bastante. E o seu?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "O meu também, tive algumas reuniões.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Legal! Tem planos para o fim de semana?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Ainda não, talvez saia com alguns amigos. E você?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Vou visitar meus pais no interior.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Que bacana! Faz tempo que não os vê?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Sim, faz alguns meses já.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Aproveite bastante então!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Obrigado! Depois te conto como foi.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Combinado! Se cuida na estrada.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Pode deixar, obrigado pela preocupação.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "De nada! Qualquer coisa me avisa.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Pode deixar, vou avisar sim.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Boa viagem e bom fim de semana!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Obrigado, pra você também!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content: "Valeu! Até mais.",
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
