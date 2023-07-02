import nodemailer from 'nodemailer';
import { API_URL } from '../../constants';

class MailService {

    transporter;
    email = '';
    password = '';

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mail.ru',
            port: 465,
            secure: true,
            auth: {
                user: this.email,
                pass: this.password
            }
        })
    }

    async sendActivationLink(to: string, link: string) {

        const activationLink = `${API_URL}/auth/activate/${link}`

        const mailOptions = {
            from: this.email,
            to,
            text: '',
            html: `
                <h1>To activate your account, follow this link:</h1>
                <a href=${activationLink}>Activate now!</a>`,
            subject: 'Activation account on the "Reputation"'
        }

        try {
            const info = await this.transporter.sendMail(mailOptions);

            return `Email send: ${info.response}`;
        } catch (e) {
            return e
        }
    }

}

export default new MailService();