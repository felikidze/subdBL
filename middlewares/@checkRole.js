const STATUS_CODE = require('../consts/statusCode');

module.exports = (needRole) => (req, res, next) => {
  const {role} = req.user;
  if (role < needRole) {
    return res.sendStatus(STATUS_CODE.FORBIDDEN);
  }

  return next();
};