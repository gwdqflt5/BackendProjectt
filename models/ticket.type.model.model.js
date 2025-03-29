const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const TicketType = sequelize.define(
    "TicketType",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }
  );

  TicketType.associate = (models) => {
    TicketType.hasMany(models.Ticket, {
      foreignKey: "ticket_id",
      as: "tickets",
    });
  };

  return TicketType;
};
