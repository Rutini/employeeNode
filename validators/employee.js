const {check, param} = require('express-validator/check');
const dataBase = require('./../dataBase').getInstance();
const validator = require('./../validators/validator');

module.exports.getOne = [
    param('id').custom(async (id, {req}) => {
        if (!id) throw new Error('Id is missed');

        const Employee = dataBase.getModel('Employee');
        const employee = !!await Employee.findByPk(id);

        if (!employee) {
            req.status = 404;
            throw new Error('Employee with id does not exists');
        }
    }),
    validator
];

module.exports.createOrUpdate = [
    check('name', 'Field name is required').trim().exists().isString(),
    check('name', 'Field name min length is 3.').isLength({ min: 3 }),
    check('name', 'Field name max length is 30.').isLength({ max: 30 }),
    check('active', 'Field active is required').isBoolean(),
    check('department_id', 'Field role is required').isNumeric(),
    check('department_id',).custom(async (department_id, {req}) => {
        const Department = dataBase.getModel('Department');
        const department = !!await Department.findByPk(department_id);

        if (!department) {
            req.status = 404;
            throw new Error('Department with this id does not exists');
        }
    }),
    validator
];
