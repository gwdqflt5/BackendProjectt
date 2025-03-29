const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define("Region", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Region.associate = (models) => {
    Region.hasMany(models.CustomerAddress, {
      foreignKey: "region_id",
      as: "customer_addresses",
    });
    Region.hasMany(models.District, {
      foreignKey: "region_id",
      as: "districts",
    });
    Region.hasMany(models.Venue, {
      foreignKey: "region_id",
      as: "region",
    });

  };

  return Region;
};
