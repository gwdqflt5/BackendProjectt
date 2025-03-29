module.exports = (sequelize, DataTypes) => {
  const VenueTypeVenue = sequelize.define("VenueTypeVenue", {
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

  // VenueTypeVenue.associate = (models) => {
  //   VenueTypeVenue.hasMany(models.Venue, {
  //     foreignKey: "venue_type_id",
  //     as: "venues",
  //   });
  // };

  return VenueTypeVenue;
};
