const ApiRouter = require('express').Router();
const authRouter = require('./auth');
const employeeRouter = require('./employee');
const userRouter = require('./user');
const departmentRouter = require('./department');

const checkPermissions = require('../middlewares/checkPermissions');

ApiRouter.use('/auth', authRouter);

ApiRouter.use(checkPermissions);
ApiRouter.use('/employees', employeeRouter);
ApiRouter.use('/users', userRouter);
ApiRouter.use('/departments', departmentRouter);

module.exports = ApiRouter;
