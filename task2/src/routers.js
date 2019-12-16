const express = require('express');
const { getData, addData, updateData, deleteData} = require('./user.controller.js');
const router = express.Router();

router.get('/users', getData);
router.post('/users', addData);
router.put('/users/:id', updateData);
router.delete('/users/:id', deleteData);

module.exports = router;