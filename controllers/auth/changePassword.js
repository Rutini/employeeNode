const {users: User} = require('../../models');
const tokenVerificator = require('../../helpers/tokenVerificator');
const bcrypt = require('bcryptjs');

module.exports = async (req, res) => {
    try {
        const {newPassword} = req.body;

        const token = req.get('Authorization');

        const {id} = tokenVerificator(token);

        const saltRounds = 10;
        const hash = await bcrypt.hash(newPassword, saltRounds);

        await User.update({
            password: hash
        }, {
            where: {
                id
            }
        });

        res.json({
            msg: 'Password successfully changed'
        });

    } catch (e) {
        res.status(400).json({
            msg: e.message
        });
    }
};
