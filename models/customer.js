module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hashed_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    lang_id: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    hashed_refresh_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Customer.associate = (models) => {
    Customer.hasMany(models.Cart, {
      foreignKey: "customer_id",
      as: "carts",
    });
    Customer.hasMany(models.CustomerAddress, {
      foreignKey: "customer_id",
      as: "addresses"
    });
    Customer.hasMany(models.CustomerCard, {
      foreignKey: "customer_id",
      as: "customer"
    });
    Customer.belongsTo(models.Gender, {
      foreignKey: "gender_id",
      as: "customergender",
    });
    Customer.belongsTo(models.Lang, {
      foreignKey: "lang_id",
      as: "lang",
    });
  };

  return Customer;
};
