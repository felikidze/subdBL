const STATUS_CODE = require('../../consts/statusCode');

module.exports = (req, res) => {
  const {tableName} = req.params;
  if (!req.models[tableName]) {
    res.sendStatus(STATUS_CODE.NOT_FOUND);
  }
  console.info(tableName);

  return req.models[tableName]
    .findAll()
    .then(rows => {
      const columns = [];
      const colKeys = Object.keys(rows[0].dataValues);
      colKeys.forEach(item => {
        columns.push({
          title: item,
          dataIndex: item,
          key: item
        })
      })
      const dataSource = [];
      rows.map(({dataValues: item}) => {
        let obj = {};
        obj = {...obj, key: item[colKeys[0]]};

        colKeys.forEach(el => obj[el] = item[el]);
        dataSource.push(obj);
      })
      res.send({dataSource, columns});
    })
    .catch(() => res.sendStatus(STATUS_CODE.BAD_REQUEST));
};