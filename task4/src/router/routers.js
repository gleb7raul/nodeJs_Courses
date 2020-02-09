const express = require('express');
const router = express.Router();
const userRouter = require('./routers/user.router.js');
const groupRouter = require('./routers/group.router.js');
const userGroupRouter = require('./routers/userGroup.router.js');

router.use(userRouter);
router.use(groupRouter);
router.use(userGroupRouter);

module.exports = router;
