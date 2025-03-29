module.exports = (sequelize, DataTypes) => {
  const SeatType = sequelize.define("SeatType", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
  SeatType.associate = (models) => {
    SeatType.hasMany(models.Seat, {
      foreignKey: "seat_type_id",
      as: "seattype1"
    });
  };
  return SeatType
}



