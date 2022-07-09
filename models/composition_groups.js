const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('composition_groups', {
    id_compgroup: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'composition_groups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "composition_groups_pkey",
        unique: true,
        fields: [
          { name: "id_compgroup" },
        ]
      },
    ]
  });
};
