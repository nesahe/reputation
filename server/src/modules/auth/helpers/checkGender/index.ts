const genders = ['Male', 'Female', 'Middle'];

export const checkGender = (gender: string): boolean => {
    return genders.includes(gender);
}