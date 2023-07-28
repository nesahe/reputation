import { getPaginationSlice } from ".";

describe('Get pagination slice', () => {

    test('Get pagination slice: 2-4', () => {

        const items = ['1', '2', '3', '4'];

        expect(getPaginationSlice(items, 2)).toEqual(['1', '2', '3']);
    })

    test('Get pagination slice: 4-4', () => {

        const items = ['1', '2', '3', '4'];

        expect(getPaginationSlice(items, 4)).toEqual(['2', '3', '4']);
    })

    test('Get pagination slice: 1-4', () => {
        const items = ['1', '2', '3', '4'];

        expect(getPaginationSlice(items, 1)).toEqual(['1', '2', '3']);
    })

    test('Get pagination slice: 1-2', () => {
        const items = ['1', '2'];

        expect(getPaginationSlice(items, 1)).toEqual(['1', '2']);
    })

    test('Get pagination slice: 2-2', () => {
        const items = ['1', '2'];

        expect(getPaginationSlice(items, 2)).toEqual(['1', '2']);

    })

})