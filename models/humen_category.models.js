const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = (sequelize, DataTypes) => {
  const HumenCategory = sequelize.define("HumenCategory", {
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
  HumenCategory.associate = (models) => {
    HumenCategory.hasMany(models.Event, {
      foreignKey: "human_category_id",
      as: "humanEvent"
    });
  };
  return HumenCategory;
};
