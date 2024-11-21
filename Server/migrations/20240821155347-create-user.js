'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      streetAddress: {
        type: Sequelize.STRING
      },
      Apartment: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      zipPostalcode: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      Nameofchurch: {
        type: Sequelize.STRING
      },
      positioninministry: {
        type: Sequelize.STRING
      },
      titleintheoffice: {
        type: Sequelize.STRING
      },
      husbandsname: {
        type: Sequelize.STRING
      },
      TshirtSize: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};