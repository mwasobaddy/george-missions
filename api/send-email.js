const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Contact form submission from ${name}`,
            text: message,
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            res.status(200).send('Email sent: ' + info.response);
        } catch (error) {
            res.status(500).send(error.toString());
        }
    } else {
        res.status(405).send('Method Not Allowed');
    }
}