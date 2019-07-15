const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Employee = dataBase.getModel('Employee');
        const Department = dataBase.getModel('Department');

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
