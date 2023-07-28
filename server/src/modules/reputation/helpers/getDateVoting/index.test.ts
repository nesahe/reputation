import { getDateVoting } from "."

describe('Get date voting', () => {

    test('Get date voting: length check', () => {
        expect(getDateVoting()).toHaveLength(10);
    })

    test('Get date voting: format date', () => {

        const isDateFormatValid = (date: string) => {
            const splittedDate = date.split('.');

            return splittedDate.length === 3;

        }

        expect(isDateFormatValid(getDateVoting())).toBe(true);

    })

    test('Get date voting: content', () => {

        const isValidDateContent = (date: string) => {

            const regular = /^(0[1-9]|1\d|2\d|3[0-1])\.(0[1-9]|1[0-2])\.(2000|20[0-9]{2}|2100)$/

            return regular.test(date);

        }

        expect(isValidDateContent(getDateVoting())).toBe(true);

    })

})