module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define("Ticket", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Events",
        key: "id",
      },
    },
    seat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    service_fee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    status_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "TicketTypes",
        key: "id",
      },
    },


  });

  Ticket.associate = (models) => {
    Ticket.belongsTo(models.Event, {
      foreignKey: "event_id",
      as: "event",
    });

    Ticket.belongsTo(models.Seat, {
      foreignKey: "seat_id",
      as: "seat",
    });

    Ticket.belongsTo(models.Status, {
      foreignKey: "status_id",
      as: "status",
    });

    Ticket.belongsTo(models.TicketType, {
      foreignKey: "ticket_id",
      as: "ticketType",
    });


  };

  return Ticket;
};
