'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      case: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      orderDate: {
        type: Sequelize.DATE
      },
      UserId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Users"
        }
      },
      StoreId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Stores"
        }
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
    await queryInterface.dropTable('Orders');
  }
};