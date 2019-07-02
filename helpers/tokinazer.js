const jwt = require('jsonwebtoken');

module.exports = (id, email) => {
    const accessToken = jwt.sign({id, email}, process.env.JWT_SECRET, {expiresIn: process.env.EXPIRES_IN});

    if(!accessToken) throw new Error('Token was no created');
    return accessToken;
};
