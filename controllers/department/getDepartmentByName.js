const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {

    try {
        const Department = dataBase.getModel('Department');

        const name = req.params.name;

        const department = await Department.findOne({ where: {name}});

        res.json({
            msg: 'Department',
            data: department
        });

    } catch (e) {
        console.log(e);
        res.status(400).json({
            msg: e.message
        });
    }
};
