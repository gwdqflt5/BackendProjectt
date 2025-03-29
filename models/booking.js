const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,

    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    finished: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    payment_method_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    delivery_method_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount_coupon_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,

    },
  });
  Booking.associate = (models) => {
    Booking.belongsTo(models.Status, {
      foreignKey: "status_id",
      as: "status",
    });
    Booking.belongsTo(models.PaymentMethod, {
      foreignKey: "payment_method_id",
      as: "paymentmetod",
    });
    Booking.belongsTo(models.Cart, {
      foreignKey: "cart_id",
      as: "cart",
    });
    Booking.belongsTo(models.DeliveryMethod, {
      foreignKey: "delivery_method_id",
      as: "deliveryMethod",
    });
    Booking.belongsTo(models.Discount, {
      foreignKey: "discount_coupon_id",
      as: "discount",
    });
  };

  return Booking;
};