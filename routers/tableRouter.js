const router = require('express').Router();
const roleNumber = require('../consts/roles');

const {
  select: selectController,
  delete: deleteController,
  update: updateController,
  insert: insertController
} = require('../controllers/table');

module.exports = router
  .get('/:tableName', selectController)
  .post('/:tableName', insertController)
  .delete('/:tableName', deleteController)
  .put('/:tableName', updateController);