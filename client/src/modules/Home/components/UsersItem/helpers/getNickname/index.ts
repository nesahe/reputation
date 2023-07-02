export const getNickname = (email: string): string => {
    return email.split('@')[0];
}