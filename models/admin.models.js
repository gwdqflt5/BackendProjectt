module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      hashed_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      is_creator: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      hashed_refresh_token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "admins",
      timestamps: true,
      underscored: true,
    }
  );

  return Admin;
};
