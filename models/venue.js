module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define("Venue", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    site: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // schema: {
    //   type: DataTypes.GEOMETRY,
    //   allowNull: true,
    // },
    regionId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    districtId: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
  });
  Venue.associate = (models) => {
    Venue.hasMany(models.Event, {
      foreignKey: "venue_id",
      as: "venueEvent"
    });
    Venue.hasMany(models.Seat, {
      foreignKey: "venue_id",
      as: "venue2"
    });
    Venue.hasMany(models.VenuePhoto, {
      foreignKey: "venueId",
      as: "venue3"
    });
    Venue.belongsTo(models.Region, {
      foreignKey: "regionId",
      as: "region",
    });
    Venue.belongsTo(models.District, {
      foreignKey: "districtId",
      as: "district",
    });

  };
  return Venue;
};
