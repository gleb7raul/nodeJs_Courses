const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const { getData, getToken } = require('./../../controllers/authorization.controller.js');
//const { bodySchemaForCreate } = require('./../../data-access/validation-data.js');
const verifyToken = require('./../../middlewares/verifyToken.js');

router.post('/posts', verifyToken, getData);
router.post('/posts/access', getToken);

module.exports = router;
