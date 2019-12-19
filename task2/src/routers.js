const express = require('express');
const { getData, addData, updateData, getOneOfData, deleteData, suggestData} = require('./user.controller.js');
const { bodySchemaForCreate, bodySchemaForUpdate, paramsSchemaForUpdate, bodySchemaForSuggestLogin } = require('./validation.module.js');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});

router.get('/users', getData);
router.post('/users', validator.body(bodySchemaForCreate), addData);
router.put('/users/:id', validator.params(paramsSchemaForUpdate), validator.body(bodySchemaForUpdate), updateData);
router.get('/users/:id', getOneOfData);
router.delete('/users/:id', deleteData);
router.get('/login', validator.body(bodySchemaForSuggestLogin), suggestData);

module.exports = router;