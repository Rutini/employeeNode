const router = require('express').Router();

const getDepartmentByName = require('../controllers/department/getDepartmentByName');

const {getOne} = require('../validators/employee');

router.get('/:name', getOne, getDepartmentByName);

module.exports = router;
