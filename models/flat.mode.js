const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = (sequelize, DataTypes) => {
  const Flat = sequelize.define("Flat", {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    },
    etaj: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    condition: {
      type: DataTypes.STRING,
    },
  });

  return Flat;
};
