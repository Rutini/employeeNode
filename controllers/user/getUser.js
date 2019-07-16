const {users: User} = require('../../models');
const tokenVerificator = require('../../helpers/tokenVerificator');

module.exports = async (req, res) => {

    try {
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
