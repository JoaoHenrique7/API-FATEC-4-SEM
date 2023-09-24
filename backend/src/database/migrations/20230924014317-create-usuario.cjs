'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nomeUsuario: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      emailUsuario: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      senhaUsuario: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      documentoUsuario: {
        type: Sequelize.STRING(14),
        allowNull: false,
        unique: true,
      },
      idTipoUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'TipoUsuario',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      idEndereco: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Endereco',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }  
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuario');
  }
};