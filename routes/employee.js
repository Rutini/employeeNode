const router = require('express').Router();

const getAllEmployees = require('../controllers/employee/getAllEmployees');
const getEmployeeByPk = require('../controllers/employee/getEmployeeByPk');
const addEmployee = require('../controllers/employee/addEmployee');
const updateEmployee = require('../controllers/employee/updateEmployee');
const deleteEmployee = require('../controllers/employee/deleteEmployee');

const {getOne, createOrUpdate} = require('../validators/employee');

router.get('/', getAllEmployees);
router.get('/:id', getOne, getEmployeeByPk);
router.post('/', createOrUpdate, addEmployee);
router.put('/:id', [getOne, createOrUpdate], updateEmployee);
router.delete('/:id', getOne, deleteEmployee);

module.exports = router;
