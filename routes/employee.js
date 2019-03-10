const router = require('express').Router();

const getAllEmployees = require('../controllers/employee/getAllEmployees');
const getEmployeeByPk = require('../controllers/employee/getEmployeeByPk');
const addEmployee = require('../controllers/employee/addEmployee');
const updateEmployee = require('../controllers/employee/updateEmployee');
const deleteEmployee = require('../controllers/employee/deleteEmployee');

router.get('/', getAllEmployees);
router.get('/:id', getEmployeeByPk);
router.post('/', addEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

module.exports = router;
