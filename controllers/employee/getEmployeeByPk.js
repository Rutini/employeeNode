const {employees: Employee, departments: Department} = require('../../models');

module.exports = async (req, res) => {

    try {
        const id = req.params.id;


        const gotEmployee = await Employee.findOne({
            where: {
                id
            },
            include: [Department]
        });

        res.json({
            msg: 'Employee',
            data: gotEmployee
        });

    } catch (e) {
        res.status(400).json({
            msg: e.message
        });
    }
};
