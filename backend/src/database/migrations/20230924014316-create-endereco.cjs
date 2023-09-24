'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Endereco', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      numeroEndereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      complementoEndereco: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      idLogradouro: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Logradouro',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Endereco');
  }
};