"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Messages", "isUser", {
      type: Sequelize.BOOLEAN,
      allowNull: true, // ou false, conforme sua necessidade
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Messages", "isUser");
  },
};
