'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cidade', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nomeCidade: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
 
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cidade');
  }
};