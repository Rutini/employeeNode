const router = require('express').Router();

const getDepartmentByName = require('../controllers/department/getDepartmentByName');

router.get('/:name', getDepartmentByName);

module.exports = router;
