const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('compositions', {
    id_comp: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_comp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'albums',
        key: 'id_album'
      }
    },
    duration: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'compositions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "compositions_pkey",
        unique: true,
        fields: [
          { name: "id_comp" },
        ]
      },
    ]
  });
};
