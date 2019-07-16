const {users: User} = require('../../models');
const bcrypt = require('bcryptjs');

module.exports = async (req, res) => {
    try {
        const {email, newPassword} = req.body;

        const saltRounds = 10;
        const hash = await bcrypt.hash(newPassword, saltRounds);

        await User.update({
            password: hash
        }, {
            where: {
                email
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
