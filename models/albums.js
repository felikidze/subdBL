const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('albums', {
    id_album: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    album_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    format: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    genre: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    language_album: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    receipt_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'albums',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "albums_pkey",
        unique: true,
        fields: [
          { name: "id_album" },
        ]
      },
    ]
  });
};
