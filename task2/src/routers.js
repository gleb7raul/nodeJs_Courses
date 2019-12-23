const express = require('express');
const { getData, addData, updateData, getOneOfData, deleteData, suggestData} = require('./user.controller.js');
const { bodySchemaForCreate, bodySchemaForUpdate, paramsSchemaForUpdate, bodySchemaForSuggestLogin } = require('./validation.module.js');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});

router.get('/users', getData);
router.post('/users', validator.body(bodySchemaForCreate, {joi: {convert: true, allowUnknown: false}}), addData);
router.put('/users/:id', validator.params(paramsSchemaForUpdate, {joi: {convert: true, allowUnknown: false}}),
validator.body(bodySchemaForUpdate, {joi: {convert: true, allowUnknown: false}}), updateData);
router.get('/users/:id', getOneOfData);
router.delete('/users/:id', deleteData);
router.get('/login', validator.body(bodySchemaForSuggestLogin, {joi: {convert: true, allowUnknown: false}}), suggestData);

module.exports = router;
