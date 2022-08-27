const nodemailer = require('nodemailer');

exports.handler = async(event) => {

    // const { user, pass } = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'eleonore55@ethereal.email',
            pass: 'jCGZJBSrd36dctDAZG'
        }
    });

    const info = await transporter.sendMail({
        from: 'eleonore55@ethereal.email',
        to: "vaun-pierre@hotmail.com, baz@example.com",
        subject: 'Event Trigger',
        text: JSON.stringify(event), // plain text body
        html: `<pre>${JSON.stringify(event, null, 2)}</pre>`,
    });

    return { message: 'success', url: nodemailer.getTestMessageUrl(info) }
}
