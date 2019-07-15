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

        if (!gotEmployees) return res.json(204).json({success: true});

        res.json({
            msg: 'All employees',
            data: gotEmployees
        });

    } catch (e) {
        res.status(500).json({
            msg: e.message
        });
    }
};
