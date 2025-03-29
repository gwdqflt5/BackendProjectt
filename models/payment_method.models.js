const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = (sequelize, DataTypes) => {
  const PaymentMethod = sequelize.define("PaymentMethod", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  PaymentMethod.associate = (models) => {
    PaymentMethod.hasMany(models.Booking, {
      foreignKey: "payment_method_id",
      as: "paymentmetod",
    });
  };
  return PaymentMethod;
};
