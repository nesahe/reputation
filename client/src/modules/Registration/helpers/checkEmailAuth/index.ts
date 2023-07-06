const emails = ['@gmail.com', '@mail.ru', '@ya.ru', '@bk.ru'];

export const checkEmailAuth = (email: string): boolean => {
    return emails.some(item => email.includes(item));
}