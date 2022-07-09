const initModels = require('../models/init-models');

module.exports = (req, res, next) => {
  req.models = initModels(req.db);
  next();
}