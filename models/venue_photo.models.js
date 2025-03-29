module.exports = (sequelize, DataTypes) => {
  const VenuePhoto = sequelize.define("VenuePhoto", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
    },
    venueId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
  });

  VenuePhoto.associate = (models) => {
    VenuePhoto.belongsTo(models.Venue, {
      foreignKey: "venueId",
      as: "venue4",
    });
  };

  return VenuePhoto;
};
