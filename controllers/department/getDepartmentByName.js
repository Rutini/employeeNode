const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Department = dataBase.getModel('Department');

        const name = req.params.name;

        if (!name) throw new Error('Name is bad');

        const department = await Department.findOne({
            where: {
                name
            }
        });

        if(!department) throw new Error('Department with this name does not exist');

        res.json({
            success: true,
            message: department
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
