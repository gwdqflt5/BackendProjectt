module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    finish_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finish_time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    event_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    human_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lang_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  Event.associate = (models) => {
    Event.belongsTo(models.Lang, {
      foreignKey: "lang_id",
      as: "lang",
    });
    Event.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
    });
    Event.belongsTo(models.HumenCategory, {
      foreignKey: "human_category_id",
      as: "human",
    });
    Event.belongsTo(models.EventType, {
      foreignKey: "event_type_id",
      as: "eventtype",
    });

    Event.hasMany(models.Ticket, {
      foreignKey: "event_id",
      as: "tickets",
    });
  };

  return Event;
};
