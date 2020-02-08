const express = require('express');
const router = express.Router();
const userRouter = require('./routers/user.router.js');
const groupRouter = require('./routers/group.router.js');

router.use(userRouter);
router.use(groupRouter);

module.exports = router;
