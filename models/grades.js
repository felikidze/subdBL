const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grades', {
    id_grade: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    album: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'albums',
        key: 'id_album'
      }
    },
    name_group: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'group_album',
        key: 'id_group'
      }
    },
    compositions: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'compositions',
        key: 'id_comp'
      }
    },
    grade: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'grades',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "grades_pkey",
        unique: true,
        fields: [
          { name: "id_grade" },
        ]
      },
    ]
  });
};
