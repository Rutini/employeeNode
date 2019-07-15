const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Employee = dataBase.getModel('Employee');

        const id = req.params.id;

        await Employee.destroy({where: {id}});

        res.status(204).json();

    } catch (e) {
        res.status(500).json({
            msg: e.message
        });
    }
};
