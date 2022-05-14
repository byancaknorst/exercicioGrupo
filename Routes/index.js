const express = require('express');
const router = express.Router();
const salesRouter = require('./salesRouter');
const userRouter = require('./userRouter');

router.use('/sales', salesRouter);
router.use('/users', userRouter);

module.exports = { router };
