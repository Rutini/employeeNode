const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Employee = dataBase.getModel('Employee');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        const employeeInfo = req.body;

        if (!employeeInfo) throw new Error('Body is empty');

        const {name, active, department_id} = employeeInfo;

        if (!name || active === undefined || !department_id) throw new Error('Some fields are empty');

        await Employee.update({
            name,
            active,
            department_id
        }, {
            where: {
                id
            }
        });

        res.json({
            success: true,
            message: 'Employee successfully updated'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
