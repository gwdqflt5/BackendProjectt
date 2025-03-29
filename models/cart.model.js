const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.NOW,
        },
        fineshedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    });

    Cart.associate = (models) => {
        Cart.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "customer",
        });

        Cart.belongsTo(models.Status, {
            foreignKey: "status_id",
            as: "status",
        });

        Cart.hasMany(models.CartItem, {
            foreignKey: "cart_id",
            as: "cartItems",
        });
    };

    return Cart;
};
