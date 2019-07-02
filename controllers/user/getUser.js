const dataBase = require('../../dataBase').getInstance();
const tokenVerificator = require('../../helpers/tokenVerificator');

module.exports = async (req, res) => {

    try {
        const User = dataBase.getModel('User');

        const token = req.get('Authorization');

        if (!token) return res.status(401).json({msg: 'Auth token is missed'});

        const {id} = tokenVerificator(token);
        const isUserRegistered = await User.findByPk(id);

        if(!isUserRegistered) throw new Error('This user does no registered');

        const user = {
            id,
            name: isUserRegistered.name,
        };

        res.json({
            success: true,
            message: user
        });
    } catch (e) {
        console.log(e);
        res.status(400).json({
            success: false,
            message: e.message
        });
    }
};
