import { checkEmailAuth } from ".";


describe('Check email auth', () => {

    test('Check email auth: nesss@gmail.com', () => {
        expect(checkEmailAuth('nesss@gmail.com')).toBe(true)
    })

    test('Check email auth: kolya@kb.ru', () => {
        expect(checkEmailAuth('kolya@kb.ru')).toBe(false);
    })

    test('Check email auth: kolya@bk.ru', () => {
        expect(checkEmailAuth('kolya@bk.ru')).toBe(true);
    })

    test('Check email auth: vanessa@ya.ru', () => {
        expect(checkEmailAuth('vanessa@ya.ru')).toBe(true);
    })

    test('Check email auth: ya@mail.ru', () => {
        expect(checkEmailAuth('ya@mail.ru')).toBe(true);
    })

    test('Check email auth: nes@dss@gmail.com', () => {
        expect(checkEmailAuth('nes@dss@gmail.com')).toBe(false)
    })

    test('Check email auth: @gmail.com@gmail.com', () => {
        expect(checkEmailAuth('@gmail.com@gmail.com')).toBe(false);
    })

    test('Check email auth: samsung@gmail.com@bk.ru', () => {
        expect(checkEmailAuth('samsung@gmail.com@bk.ru')).toBe(false);
    })
})