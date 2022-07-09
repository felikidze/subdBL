const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('group_album', {
    id_group: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_group: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    website: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    composition_group: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'composition_groups',
        key: 'id_compgroup'
      }
    }
  }, {
    sequelize,
    tableName: 'group_album',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "group_album_pkey",
        unique: true,
        fields: [
          { name: "id_group" },
        ]
      },
    ]
  });
};
