var DataTypes = require("sequelize").DataTypes;
var _albums = require("./albums");
var _composition_groups = require("./composition_groups");
var _compositions = require("./compositions");
var _grades = require("./grades");
var _group_album = require("./group_album");

function initModels(sequelize) {
  var albums = _albums(sequelize, DataTypes);
  var composition_groups = _composition_groups(sequelize, DataTypes);
  var compositions = _compositions(sequelize, DataTypes);
  var grades = _grades(sequelize, DataTypes);
  var group_album = _group_album(sequelize, DataTypes);

  compositions.belongsTo(albums, { as: "name_comp_album", foreignKey: "name_comp"});
  albums.hasMany(compositions, { as: "compositions", foreignKey: "name_comp"});
  grades.belongsTo(albums, { as: "album_album", foreignKey: "album"});
  albums.hasMany(grades, { as: "grades", foreignKey: "album"});
  group_album.belongsTo(composition_groups, { as: "composition_group_composition_group", foreignKey: "composition_group"});
  composition_groups.hasMany(group_album, { as: "group_albums", foreignKey: "composition_group"});
  grades.belongsTo(compositions, { as: "compositions_composition", foreignKey: "compositions"});
  compositions.hasMany(grades, { as: "grades", foreignKey: "compositions"});
  grades.belongsTo(group_album, { as: "name_group_group_album", foreignKey: "name_group"});
  group_album.hasMany(grades, { as: "grades", foreignKey: "name_group"});

  return {
    albums,
    composition_groups,
    compositions,
    grades,
    group_album,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
