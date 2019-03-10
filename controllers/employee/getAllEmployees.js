const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Employee = dataBase.getModel('Employee');
        const Department = dataBase.getModel('Department');

        const gotEmployees = await Employee.findAll({
            attributes: [
                'id',
                'name',
                'active',
                'department_id'
            ],
            include: [Department]
        });

        if (!gotEmployees) throw new Error('Employees do not exist');

        res.json({
            success: true,
            message: gotEmployees
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
