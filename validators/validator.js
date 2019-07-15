const {validationResult} = require('express-validator/check');

module.exports = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        if (req.status) return res.status(req.status).json({ errors: errors.array() });
        return res.status(422).json({ errors: errors.array() });
    }
    next();
};
