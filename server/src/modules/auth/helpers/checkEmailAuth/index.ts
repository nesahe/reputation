const emailDomains = ['gmail.com', 'mail.ru', 'ya.ru', 'bk.ru'];

export const checkEmailAuth = (email: string): boolean => {

    const splittedEmail = email.split('@');

    const mailDomain = splittedEmail[1];

    return emailDomains.includes(mailDomain) && splittedEmail.length === 2;
}