const express = require('express');
const router = express.Router()

const settingController = require('../Controllers/settingController')
const { getTables, postTable, deleteTable, getDatatypes, updateTable } = settingController

/** tablelist **/
router.get('/tables', getTables);
router.post('/tables', postTable);
router.put('/tables/:id', updateTable);
router.delete('/tables/:id/:name', deleteTable);

/** datatype **/
router.get('/datatypes', getDatatypes);

module.exports = router