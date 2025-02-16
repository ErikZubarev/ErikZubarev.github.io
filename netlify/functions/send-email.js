const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    const { name, email, message } = JSON.parse(event.body);

    const smtpPassword = process.env.GMAIL_SMTP_PASSWORD;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'erikzubarevbusiness@gmail.com',
            pass: smtpPassword
        }
    });

    const mailOptions = {
        from: email,
        to: 'erikzubarevbusiness@gmail.com',
        subject: `Contact form submission from ${name}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message })
        };
    }
};