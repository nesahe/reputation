import { sortUsers } from ".";

describe('Sort users', () => {

    const usersArr = [
        {
            login: '11',
            id: 'ewwe',
            gender: 'Female',
            reputation: 0,
            isLiked: false
        },
        {
            login: '1211',
            id: 'ewwe',
            gender: 'Female',
            reputation: 2,
            isLiked: false
        }
    ]

    test('Sort users: reputation', () => {
        expect(sortUsers([...usersArr], 'reputation')).toEqual([...usersArr].reverse());
    })

    test('Sort users: login', () => {
        expect(sortUsers([...usersArr], 'login')).toEqual(usersArr)
    })

    test(`Sort users: ''`, () => {
        expect(sortUsers([...usersArr], '')).toEqual(usersArr);
    })
})