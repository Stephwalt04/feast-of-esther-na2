'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    streetAddress: DataTypes.STRING,
    Apartment: DataTypes.STRING,
    city: DataTypes.STRING,
    zipPostalcode: DataTypes.STRING,
    country: DataTypes.STRING,
    Nameofchurch: DataTypes.STRING,
    positioninministry: DataTypes.STRING,
    titleintheoffice: DataTypes.STRING,
    husbandsname: DataTypes.STRING,
    TshirtSize: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};