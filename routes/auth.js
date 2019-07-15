const router = require('express').Router();

const loginUser = require('../controllers/auth/loginUser');
const registerUser = require('../controllers/auth/registerUser');
const forgotPassword = require('../controllers/auth/forgotPassword');
const changePassword = require('../controllers/auth/changePassword');
const changeForgotPassword = require('../controllers/auth/changeForgotPassword');

const {register: registerValidator,
       login: loginValidator,
       forgotPassword: forgotPasswordValidator,
       changePassword: changePasswordValidator,
       changeForgotPassword: changeForgotPasswordValidator} = require('../validators/auth');
const checkPermissions = require('../middlewares/checkPermissions');

router.post('/login', loginValidator, loginUser);
router.post('/register', registerValidator, registerUser);
router.post('/forgotPassword', forgotPasswordValidator, forgotPassword);
router.post('/changePassword', [checkPermissions, changePasswordValidator], changePassword);
router.post('/changeForgotPassword', changeForgotPasswordValidator, changeForgotPassword);

module.exports = router;
