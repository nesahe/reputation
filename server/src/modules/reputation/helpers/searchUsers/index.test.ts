import { searchUsers } from ".";

describe('Search users', () => {

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
            reputation: 0,
            isLiked: false
        }
    ]

    test('Search users: 1211', () => {

        const expOutArr = [
            {
                login: '1211',
                id: 'ewwe',
                gender: 'Female',
                reputation: 0,
                isLiked: false
            }
        ]

        expect(searchUsers(usersArr, '121')).toEqual(expOutArr);
    })

    test('Search users: abc', () => {
        expect(searchUsers(usersArr, 'abc')).toEqual([]);
    })

    test('Search users: 1', () => {
        expect(searchUsers(usersArr, '1')).toEqual(usersArr);
    })

    test(`Search users: ''`, () => {
        expect(searchUsers(usersArr, '')).toEqual(usersArr);
    })

    test('Search users: 11', () => {
        expect(searchUsers(usersArr, '11')).toEqual(usersArr);
    })
})