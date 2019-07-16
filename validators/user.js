const {header} = require('express-validator/check');
const validator = require('./../validators/validator');
const tokenVerificator = require('../helpers/tokenVerificator');

module.exports.getOneFromToken = [
    header('Authorization').custom(async token => {
        if (!token) throw new Error('Auth token is missed');
        const {users: User} = require('../models');
        const {id} = tokenVerificator(token);
        const isRegistered = await User.findByPk(id);
        if (!isRegistered) throw new Error('User is not defined');
        return isRegistered;
    }),
    validator
];
