module.exports = (sequelize, DataTypes) => {

    const CustomerAddress = sequelize.define("CustomerAddress", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        region_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        district_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        street: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        house: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        flat: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        post_index: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        info: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

    CustomerAddress.associate = (models) => {
        CustomerAddress.belongsTo(models.Customer, {
            foreignKey: "customer_id",
            as: "customer",
        });
        CustomerAddress.belongsTo(models.Country, {
            foreignKey: "country_id",
            as: "country",
        });
        CustomerAddress.belongsTo(models.Region, {
            foreignKey: "region_id",
            as: "region",
        });
        CustomerAddress.belongsTo(models.District, {
            foreignKey: "district_id",
            as: "district",
        });
    };

    return CustomerAddress;
};
