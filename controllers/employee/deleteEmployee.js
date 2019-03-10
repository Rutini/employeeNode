const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const Employee = dataBase.getModel('Employee');

        const id = req.params.id;

        if (!id) throw new Error('No id');

        await Employee.destroy({
            where: {
                id
            }
        });

        res.json({
            success: true,
            message: 'Employee successfully deleted'
        });
    } catch (e) {
        console.log(e);
        res.json({
            success: false,
            message: e.message
        });
    }
};
