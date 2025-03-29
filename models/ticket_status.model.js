const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const TicketStatus = sequelize.define("TicketStatus", {
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

  return TicketStatus;
};
