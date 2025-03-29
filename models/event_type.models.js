const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

module.exports = (sequelize, DataTypes) => {
  const EventType = sequelize.define("EventType", {
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
  EventType.associate = (models) => {
    EventType.hasMany(models.Event, {
      foreignKey: "event_type_id",
      as: "eventType"
    });
  };
  return EventType;
};
