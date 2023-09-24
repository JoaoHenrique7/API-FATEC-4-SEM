'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Logradouro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Logradouro.init({
    id: DataTypes.INTEGER,
    nomeLogradouro: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Logradouro',
  });
  return Logradouro;
};