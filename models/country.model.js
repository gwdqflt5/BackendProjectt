const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define("Country", {

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  Country.associate = (models) => {
    Country.hasMany(models.CustomerAddress, {
      foreignKey: "country_id",
      as: "customer_addresses",
    });
  };
  return Country;
};

