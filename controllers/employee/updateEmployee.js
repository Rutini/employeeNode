const {employees: Employee} = require('../../models');

module.exports = async (req, res) => {
    try {
        const id = req.params.id;

        const employeeInfo = req.body;

        const {name, active, department_id} = employeeInfo;

        await Employee.update({
            name,
            active,
            department_id
        }, {
            where: {
                id
            }
        });

        res.status(201).json({
            msg: 'Employee successfully updated'
        });

    } catch (e) {
        res.status(400).json({
            msg: e.message
        });
    }
};
