const mailer = require('nodemailer');

module.exports = async userEmail => {

    const transport = mailer.createTransport({
        host: "smtp.gmail.com",
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_LOGIN,
            pass: process.env.EMAIL_PASS
        }
    });

    await transport.sendMail({
        from: process.env.EMAIL_LOGIN,
        to: userEmail,
        subject: 'Change password',
        html: buildTemplate()
    });

    return `Link for change password send to ${userEmail}`;

    function buildTemplate() {
        return `<h1> Password change </h1>
         <br>
         Someone wants to change password on ${process.env.FRONT_HOST}.
         <br>
         If it's you please click: <p>htttp://FRONT-END FORM URL</p>
         `;
    }
};
