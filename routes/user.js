const router = require('express').Router();

const getUser = require('../controllers/user/getUser');

const {getOneFromToken} = require('../validators/user');

router.get('/about', getOneFromToken, getUser);

module.exports = router;
