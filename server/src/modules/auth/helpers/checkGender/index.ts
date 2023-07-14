const genders = ['Male', 'Female', 'Middle'];

export const checkGender = (gender: string) => {
    return genders.includes(gender);
}