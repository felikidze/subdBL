const STATUS_CODE = require('../../consts/statusCode');

module.exports = (req, res) => {
  const {tableName} = req.params;
  if (!req.models[tableName]) {
    res.sendStatus(STATUS_CODE.NOT_FOUND);
  }
  console.info(req.body)
  return req.models[tableName]
    .findOne({where: req.body})
    .then(row => row.destroy())
    .then(() => res.sendStatus(STATUS_CODE.OK))
    .catch(() => res.sendStatus(STATUS_CODE.BAD_REQUEST));
};