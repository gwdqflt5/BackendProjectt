module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define("District", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  District.associate = (models) => {
    District.hasMany(models.CustomerAddress, {
      foreignKey: "district_id",
      as: "customer_addresses",
    });

    District.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "region",
    });

  };

  return District;
};
