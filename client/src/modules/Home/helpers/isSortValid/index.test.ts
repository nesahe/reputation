import { isSortValid } from ".";

describe('Is sort valid', () => {

    test('Is sort valid: reputation', () => {
        expect(isSortValid('reputation')).toBe(true);
    })

    test('Is sort valid: reputationn', () => {
        expect(isSortValid('reputationn')).toBe(false);
    })

    test('is sort valid: login', () => {
        expect(isSortValid('login')).toBe(true);
    })

    test('Is sort valid: 69', () => {
        expect(isSortValid('69')).toBe(false)
    })

})