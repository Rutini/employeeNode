const jwt = require('jsonwebtoken');

module.exports = (token) => {

    let user = null;

    if (!token) throw new Error('Token is missed');

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) throw new Error(err.message);

        user = {
            id: decoded.id,
            email: decoded.email,
        }
    });

    if(!user) throw new Error('I dont like hackers, please go away!');

    return user;
};
