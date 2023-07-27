import { validSortMethod } from ".";

describe('Valid sort method', () => {

    test('Valid sort method: reputation', () => {
        expect(validSortMethod('reputation')).toBe(true);
    })

    test('Valid sort method: repputation', () => {
        expect(validSortMethod('repputation')).toBe(false);
    })

    test('Valid sort method: 69', () => {
        expect(validSortMethod('69')).toBe(false);
    })

    test(`Valid sort method: ' '`, () => {
        expect(validSortMethod(' ')).toBe(false);
    })

    test('Valid sort method: login', () => {
        expect(validSortMethod('login')).toBe(true)
    })

    test(`Valid sort method: ''`, () => {
        expect(validSortMethod('')).toBe(true);
    })
})