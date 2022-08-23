import nodemailer from 'nodemailer'
import { textSpanIsEmpty } from 'typescript';

const sendEmail = async (from: string, to: string, subject: string, text: string) => {
    let transport = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: 'support@oshaic.com', to, subject, text
    };

    transport.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err)
            return false
        } else {
            console.log(info);
            return true
        }
    });
}

export {
    sendEmail
}