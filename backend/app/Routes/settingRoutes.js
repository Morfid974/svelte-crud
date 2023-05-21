const express = require('express');
const router = express.Router()

const settingController = require('../Controllers/settingController')
const { getTables, postTable, deleteTable, getDatatypes, updateTable, getMenu, getFields } = settingController

/** tablelist **/
router.get('/tables', getTables);
router.post('/tables', postTable);
router.put('/tables/:id', updateTable);
router.delete('/tables/:id/:name', deleteTable);

/** fields **/
router.get('/fields/:name', getFields);

/** datatype **/
router.get('/datatypes', getDatatypes);

/** menu **/
router.get('/menu', getMenu);

module.exports = router