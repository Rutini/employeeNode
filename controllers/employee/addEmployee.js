const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Employee = dataBase.getModel('Employee');

        const employeeInfo = req.body;

        const {name, active, department_id} = employeeInfo;

        await Employee.create({
            name,
            active,
            department_id
        });

        res.status(201).json({
            msg: 'Employee successfully inserted'
        });

    } catch (e) {
        res.status(400).json({
            msg: e.message
        });
    }
};
