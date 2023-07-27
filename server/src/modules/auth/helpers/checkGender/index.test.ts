import { checkGender } from ".";

describe('Check gender', () => {

    test('Check gender: Female', () => {
        expect(checkGender('Female')).toBe(true);
    })

    test('Check gender: Dog', () => {
        expect(checkGender('Dog')).toBe(false);
    })

    test('Check gender: Male', () => {
        expect(checkGender('Male')).toBe(true);
    })

    test('Check gender: None', () => {
        expect(checkGender('None')).toBe(false);
    })

    test('Check gender: Middle ', () => {
        expect(checkGender('Middle')).toBe(true);
    })

    test('Check gender: Midle', () => {
        expect(checkGender('Midle')).toBe(false);
    })

    test(`Check gender: ''`, () => {
        expect(checkGender('')).toBe(false);
    })

})