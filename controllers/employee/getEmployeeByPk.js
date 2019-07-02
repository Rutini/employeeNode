const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Employee = dataBase.getModel('Employee');
        const Department = dataBase.getModel('Department');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        const gotEmployee = await Employee.findOne({
            where: {
                id
            },
            include: [Department]
        });

        if (!gotEmployee) throw new Error('Employee with this id does not exist');

        res.json({
            success: true,
            message: gotEmployee
        });

    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            message: e.message
        });
    }
};
