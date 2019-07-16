const {users: User} = require('../models');
const tokenVerificator = require('../helpers/tokenVerificator');

module.exports = async (req, res, next) => {

    try {
        const token = req.get('Authorization');

        if (!token) return res.status(400).json({msg: 'Auth token is missed'});

        const {id} = tokenVerificator(token);

        const isRegistered = await User.findByPk(id);

        if (!isRegistered) return res.status(403).json({msg: 'Auth token is bad, sign in again'});

        next();

    } catch (e) {
        next(e.message);
    }
};
