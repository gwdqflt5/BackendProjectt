
module.exports = (sequelize, DataTypes) => {
  const Lang = sequelize.define("Lang", {
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
  Lang.associate = (models) => {

    Lang.hasMany(models.Customer, {
      foreignKey: "lang_id",
      as: "langCustomer"
    });
    Lang.hasMany(models.Event, {
      foreignKey: "lang_id",
      as: "langEvent"
    });

  };
  return Lang;
};
