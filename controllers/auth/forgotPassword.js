const sendEmail = require('../../helpers/sendEmail');

module.exports = async (req, res) => {
    try {
        const {email} = req.body;

        const info = await sendEmail(email);

        res.status(201).json({
            msg: info
        });

    } catch (e) {
        res.status(400).json({
            msg: e.message
        });
    }
};
