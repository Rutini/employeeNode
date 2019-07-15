const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');

module.exports = async (req, res) => {

    try {
        const User = dataBase.getModel('User');

        const token = req.get('Authorization');

        const {id} = tokenVerificator(token);
        const user = await User.findByPk(id);

        res.json({
            msg: 'User',
            data: user
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({
            msg: e.message
        });
    }
};
