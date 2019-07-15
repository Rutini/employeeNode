module.exports = (req, res, next) => {

    try {
        const token = req.get('Authorization');

        if (!token) return res.status(400).json({msg: 'Auth token is missed'});

        next();

    } catch (e) {
        next(e.message);
    }
};
