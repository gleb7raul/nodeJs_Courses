const express = require('express');
const { getData, addData, updateData, getOneOfData, deleteData, suggestData} = require('./user.controller.js');
const { querySchema } = require('./validation.module.js');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});

router.get('/users', getData);
router.post('/users', validator.body(querySchema), addData);
router.put('/users/:id', updateData);
router.get('/users/:id', getOneOfData);
router.delete('/users/:id', deleteData);
router.get('/', suggestData);

module.exports = router;