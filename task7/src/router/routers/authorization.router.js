const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const { getData, getToken } = require('./../../controllers/authorization.controller.js');
const { bodySchemaForAuthorization } = require('./../../data-access/validation-data.js');
const verifyToken = require('./../../middlewares/verifyToken.js');

router.post('/posts', verifyToken, getData);
router.post('/posts/access', validator.body(bodySchemaForAuthorization, {joi: {convert: true, allowUnknown: false}}), getToken);

module.exports = router;
