const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Employee = dataBase.getModel('Employee');

        const employeeInfo = req.body;

        if (!employeeInfo) throw new Error('Body is empty');

        const {name, active, department_id} = employeeInfo;

        if (!name || !active || !department_id) throw new Error('Some fields are empty');

        await Employee.create({
            name,
            active,
            department_id
        });

        res.json({
            success: true,
            message: 'Employee successfully inserted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
