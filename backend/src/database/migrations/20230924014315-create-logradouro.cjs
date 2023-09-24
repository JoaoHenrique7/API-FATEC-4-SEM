'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Logradouro', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nomeLogradouro: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      idBairro: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Bairro',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Logradouro');
  }
};