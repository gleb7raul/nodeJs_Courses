const express = require('express');
const router = express.Router();
const userRouter = require('./routers/user.router.js');
const groupRouter = require('./routers/group.router.js');
const userGroupRouter = require('./routers/userGroup.router.js');
const authorization = require('./routers/authorization.router.js');

router.use(userRouter);
router.use(groupRouter);
router.use(userGroupRouter);
router.use(authorization);

module.exports = router;
