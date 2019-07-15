const {param} = require('express-validator/check');
const dataBase = require('./../dataBase').getInstance();
const validator = require('./../validators/validator');

module.exports.getOne = [
    param('name').custom(async (name, {req}) => {
        if (!name) throw new Error('Name is missed');

        const Department = dataBase.getModel('Department');
        const department = !!await Department.findOne({ where: {name} });

        if (!department) {
            req.status = 404;
            throw new Error('Department with id does not exists');
        }
    }),
    validator
];
