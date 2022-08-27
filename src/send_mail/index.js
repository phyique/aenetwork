const nodemailer = require('nodemailer');

exports.handler = async(event) => {
    const { OUTLOOK_EMAIL, OUTLOOK_PASSWORD } = process.env;
    const transporter = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        auth: {
            user: OUTLOOK_EMAIL,
            pass: OUTLOOK_PASSWORD
        },
        tls: { ciphers: 'SSLv3' }
    });
    try {
        await transporter.sendMail({
            from: OUTLOOK_EMAIL,
            to: "vaun-pierre@hotmail.com",
            subject: 'Event Trigger',
            text: JSON.stringify(event), // plain text body
            html: `<pre>${JSON.stringify(event, null, 2)}</pre>`,
        });
        return { isSuccessful: true, message: 'success'}
    } catch (e) {
        console.log(e)
    }

    return { isSuccessful: false, message: 'E-mail could not be send.'}
}