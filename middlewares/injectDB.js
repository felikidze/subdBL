const sequelize = require('../config/database');
const STATUS_CODE = require('../consts/statusCode');

module.exports = (req, res, next) => {
  sequelize.authenticate()
    .then(() => {
      req.db = sequelize;
      next();
    })
    .catch((e) => {
      console.error(e);
      res.sendStatus(STATUS_CODE.INTERNAL_SERVER_ERROR);
    });
};