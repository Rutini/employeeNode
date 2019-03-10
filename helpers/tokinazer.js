const jwt = require('jsonwebtoken');
const secret = require('../config/secret');

module.exports = (id, email) => {
    const accessToken = jwt.sign({id, email}, secret, {expiresIn: 999999});

    if(!accessToken) throw new Error('Token was no created');
    return accessToken;
};
