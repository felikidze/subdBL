const STATUS_CODE = require('../../consts/statusCode');

module.exports = (req, res) => {
  const {tableName} = req.params;
  if (!req.models[tableName]) {
    res.sendStatus(STATUS_CODE.NOT_FOUND);
  }
  const {id, key, idName, ...data} = req.body;
  console.info(data);
  const condition = {};
  condition[idName] = id;
  return req.models[tableName]
    .findOne({where: condition})
    .then(row => row.update(req.body))
    .then(() => res.sendStatus(STATUS_CODE.OK))
    .catch(() => res.sendStatus(STATUS_CODE.BAD_REQUEST));
};