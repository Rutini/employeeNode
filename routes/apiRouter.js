const ApiRouter = require('express').Router();
const employeeRouter = require('./employee');
const userRouter = require('./user');
const departmentRouter = require('./department');

ApiRouter.use('/employees', employeeRouter);
ApiRouter.use('/users', userRouter);
ApiRouter.use('/departments', departmentRouter);

module.exports = ApiRouter;
