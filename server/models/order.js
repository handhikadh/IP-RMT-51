'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, {
        foreignKey: 'UserId',
      });
      Order.belongsTo(models.Store, {
        foreignKey: 'StoreId'
      });
    }
  }
  Order.init({
    case: DataTypes.STRING,
    description: DataTypes.STRING,
    orderDate: DataTypes.DATE,
    UserId: DataTypes.INTEGER,
    StoreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};