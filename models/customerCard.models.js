module.exports = (sequelize, DataTypes) => {
  const CustomerCard = sequelize.define("CustomerCard", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.CHAR(4),
      allowNull: false,
    },
    month: {
      type: DataTypes.CHAR(2),
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    is_main: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  CustomerCard.associate = (models) => {
    CustomerCard.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
  };
  return CustomerCard;
};
