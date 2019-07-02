const dataBase = require('../../dataBase').getInstance();
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {

    try {
        const User = dataBase.getModel('User');

        const userInfo = req.body;

        if (!userInfo) throw new Error('Body is empty');

        const {name, email, password} = userInfo;
        if (!name || !email || !password) throw new Error('Some fields are empty');

        const alreadyExist = await User.findOne({
            where: {
                email
            }
        });

        if (alreadyExist) return res.status(409).json({msg: 'This user already exist'});

        const saltRounds = 10;

        const hash = await bcrypt.hash(password, saltRounds);

        await User.create({
            name,
            email,
            password: hash
        });

        res.status(201).json({
            success: true,
            message: 'User successfully registered'
        });

    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            message: e.message
        });
    }
};
