const STATUS_CODE = require('../consts/statusCode');
const {apiKeys: {operator, admin, reader}} = require('../config/app');
const roleNumber = require('../consts/roles');

module.exports = (req, res, next) => {
  const {Authorization} = req.header;
  switch (Authorization) {
    case reader:
      req.user.role = roleNumber.READER;
      return next()
    case operator:
      req.user.role = roleNumber.OPERATOR;
      return next()
    case admin:
      req.user.role = roleNumber.ADMIN;
      return next()
    default:
      return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
  }
};