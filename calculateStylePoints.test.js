const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('Notes for jump: ', () => {
        it('Same integer numbers: ', () => {
            const actual = calculateStylePoints([20, 20, 20, 20, 20]);

            const expected = 60;

            assert.equal(actual, expected);
        });

        it('Different integer numbers: ', () => {
            const actual = calculateStylePoints([12, 18, 14, 16, 19]);

            const expected = 48;

            assert.equal(actual, expected);
        });

        it('Same non-integer numbers: ', () => {
            const actual = calculateStylePoints([17.5, 17.5, 17.5, 17.5, 17.5]);

            const expected = 52.5;

            assert.equal(actual, expected);
        });
        
        it('Non-integer numbers: ', () => {
            const actual = calculateStylePoints([19.5, 17.5, 19.5, 15.5, 16.5]);

            const expected = 53.5;

            assert.equal(actual, expected);
        });

        it('Mixed numbers: ', () => {
            const actual = calculateStylePoints([19.5, 20, 19.5, 20, 18]);

            const expected = 59;

            assert.equal(actual, expected);
        });
    });
});