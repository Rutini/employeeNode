const {check, header} = require('express-validator/check');
const dataBase = require('./../dataBase').getInstance();
const validator = require('./../validators/validator');
const bcrypt = require('bcrypt');
const tokenVerificator = require('../helpers/tokenVerificator');

module.exports.register = [
    check('name', 'Field name is required.').trim().exists().isString(),
    check('name', 'Field name min length is 3.').isLength({ min: 3 }),
    check('name', 'Field name max length is 30.').isLength({ max: 30 }),
    check('email', 'Field email is required.').trim().exists(),
    check('email', 'Field email wrong type.').isEmail(),
    check('email').custom(async email => {
        const User = dataBase.getModel('User');
        const user = !!await User.findOne({ where: { email }});
        if (user) {
            req.status = 409;
            throw new Error('User with email already exists');
        }
    }),
    check('password', 'Field password is required.').exists().isString(),
    check('password', 'Field password min length is 6.').isLength({ min: 6 }),
    check('password', 'Field password max length is 16.').isLength({ max: 16 }),
    check('confirm_password', 'Field confirm password is required.').exists().isString(),
    check('confirm_password', 'Field confirm password min length is 6.').isLength({ min: 6 }),
    check('confirm_password', 'Field confirm password max length is 16.').isLength({ max: 16 }),
    check('password', 'Field password must be same as confirm password field')
        .custom((value, {req}) => {
            return value === req.body.confirm_password;
        }),
    validator.validate
];

module.exports.login = [
    check('email', 'Field email is required').trim().exists(),
    check('email', 'Email\'s type invalid').isEmail(),
    check('email').custom(async email => {
        const User = dataBase.getModel('User');
        const user = !!await User.findOne({ where: {email}});
        if (!user) throw new Error('Invalid email');
    }),
    check('password', 'Field password is required').exists().isString(),
    check('password', 'Field password min length is 6.').isLength({ min: 6 }),
    check('password').custom(async (password, {req}) => {
        const User = dataBase.getModel('User');
        const email = req.body.email;
        const user = await User.findOne({ where: { email }});
        const {password: hash} = user;
        const correctCredentials = await bcrypt.compare(password, hash);
        if (!correctCredentials) throw new Error('Invalid password');
    }),
    validator
];

module.exports.forgotPassword = [
    check('email', 'Field email is required').trim().exists(),
    check('email', 'Email\'s type invalid').isEmail(),
    check('email').custom(async email => {
        const User = dataBase.getModel('User');
        const user = !!await User.findOne({ where: { email }});
        if (!user) throw new Error('Invalid email');
    }),
    validator
];

module.exports.changePassword = [
    header('Authorization').custom(async token => {
        const User = dataBase.getModel('User');
        const {id} = tokenVerificator(token);
        const isRegistered = await User.findByPk(id);
        if (!isRegistered) throw new Error('User is not defined');
        return isRegistered;
    }),
    check('newPassword', 'Field newPassword is required.').exists().isString(),
    check('newPassword', 'Field newPassword min length is 6.').isLength({ min: 6 }),
    check('newPasswordCopy', 'Field newPasswordCopy is required.').exists().isString(),
    check('newPasswordCopy', 'Field newPasswordCopy min length is 6.').isLength({ min: 6 }),
    check('newPassword', 'Passwords are not equals').custom((newPassword, {req}) => {
        return newPassword === req.body.newPasswordCopy;
    }),
    validator
];

module.exports.changeForgotPassword = [
    check('email', 'Field email is required').trim().exists(),
    check('email', 'Email\'s type invalid').isEmail(),
    check('email').custom(async email => {
        const User = dataBase.getModel('User');
        const user = !!await User.findOne({ where: {email}});
        if (!user) throw new Error('Invalid email');
    }),
    check('newPassword', 'Field newPassword is required.').exists().isString(),
    check('newPassword', 'Field newPassword min length is 6.').isLength({ min: 6 }),
    check('newPasswordCopy', 'Field newPasswordCopy is required.').exists().isString(),
    check('newPasswordCopy', 'Field newPasswordCopy min length is 6.').isLength({ min: 6 }),
    check('newPassword', 'Passwords are not equals').custom((newPassword, {req}) => {
        return newPassword === req.body.newPasswordCopy;
    }),
    validator
];
