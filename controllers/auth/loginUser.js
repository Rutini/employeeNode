const dataBase = require('../../dataBase').getInstance();
const tokinazer = require('../../helpers/tokinazer');

module.exports = async (req, res) => {

    try {
        const User = dataBase.getModel('User');

        const {email} = req.body;

        const user = await User.findOne({
            where: {
                email
            }
        });

        const {id} = user.dataValues;
        const accessToken = tokinazer(id, email);

        res.json({
            msg: 'Authorization successful',
            data: accessToken
        });

    } catch (e) {
        res.status(400).json({
            msg: e.message
        });
    }
};
