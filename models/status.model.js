const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Status = sequelize.define("Status", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Status.associate = (models) => {
    Status.hasMany(models.Booking, {
      foreignKey: "status_id",
      as: "bookings", // <-- oldingi "status" nomi o'zgartirildi
    });
    Status.hasMany(models.Cart, {
      foreignKey: "status_id",
      as: "carts",
    });
    Status.hasMany(models.Ticket, {
      foreignKey: "status_id",
      as: "tickets",
    });
  };

  return Status;
};
