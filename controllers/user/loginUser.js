const dataBase = require('../../dataBase').getInstance();
const tokinazer = require('../../helpers/tokinazer');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {

    try {
        const User = dataBase.getModel('User');

        const {email, password} = req.body;

        if (!email || !password) throw new Error('Some fields are empty');

        const isPresent = await User.findOne({
            where: {
                email
            }
        });

        if (!isPresent) throw new Error('User with this email does not exist');

        const correctPassword = await bcrypt.compare(password, isPresent.password);

        const {id} = isPresent.dataValues;
        const accessToken = tokinazer(id, email);

        if (!correctPassword) throw new Error('Wrong password');

        res.json({
            success: true,
            message: accessToken
        });

    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            message: e.message
        });
    }
};
