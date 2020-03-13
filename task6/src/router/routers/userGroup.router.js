const express = require('express');
const addUsersToGroup = require('./../../controllers/userGroup.controller.js');
const router = express.Router();

router.post('/userGroup', addUsersToGroup);

module.exports = router;
