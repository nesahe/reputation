import { getPaginationItemCount } from '.';

describe('Get pagination item count', () => {
    test('Get pagination item count: 3', () => {
        expect(getPaginationItemCount(3)).toEqual(['1', '2', '3'])
    })
    test('Get pagination item count: 4', () => {
        expect(getPaginationItemCount(3)).not.toEqual(['0', '1', '2', '3'])
    })
})