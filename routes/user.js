const router = require('express').Router();

const getUser = require('../controllers/user/getUser');
const loginUser = require('../controllers/user/loginUser');
const registerUser = require('../controllers/user/registerUser');

router.get('/about', getUser);
router.post('/login', loginUser);
router.post('/register', registerUser);

module.exports = router;
