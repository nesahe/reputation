import { getDateVoting } from "."

describe('Get date voting', () => {
    test('Get date voting: length check', () => {
        expect(getDateVoting()).toHaveLength(10);
    })
})