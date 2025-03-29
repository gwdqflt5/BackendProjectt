
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define("Gender", {
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
  Gender.associate = (models) => {

    Gender.hasMany(models.Customer, {
      foreignKey: "gender_id",
      as: "customergender"
    });

  };
  return Gender;
};
