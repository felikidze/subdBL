const STATUS_CODE = require('../../consts/statusCode');

module.exports = (req, res) => {
  const {tableName} = req.params;
  console.info(req.body);
  if (!req.models[tableName]) {
    res.sendStatus(STATUS_CODE.NOT_FOUND);
  }

  return req.models[tableName]
    .create(req.body)
    .then(() => res.sendStatus(STATUS_CODE.OK))
    .catch(() => res.sendStatus(STATUS_CODE.BAD_REQUEST));
};