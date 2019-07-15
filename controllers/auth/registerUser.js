const dataBase = require('../../dataBase').getInstance();
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {

    try {
        const User = dataBase.getModel('User');

        const userInfo = req.body;

        const {name, email, password} = userInfo;

        const saltRounds = 10;

        const hash = await bcrypt.hash(password, saltRounds);

        await User.create({
            name,
            email,
            password: hash
        });

        res.status(201).json({
            msg: 'User successfully registered'
        });

    } catch (e) {
        res.status(400).json({
            msg: e.message
        });
    }
};
