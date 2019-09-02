const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('Notes for jump: ', () => {
        it('Same integer numbers: ', () => {
            const actualStylePoints = calculateStylePoints([20, 20, 20, 20, 20]);

            const expectedStylePoints = 60;

            assert.equal(actualStylePoints, expectedStylePoints);
        });

        it('Different integer numbers: ', () => {
            const actualStylePoints = calculateStylePoints([12, 18, 14, 16, 19]);

            const expectedStylePoints = 48;

            assert.equal(actualStylePoints, expectedStylePoints);
        });

        it('Same non-integer numbers: ', () => {
            const actualStylePoints = calculateStylePoints([17.5, 17.5, 17.5, 17.5, 17.5]);

            const expectedStylePoints = 52.5;

            assert.equal(actualStylePoints, expectedStylePoints);
        });
        
        it('Non-integer numbers: ', () => {
            const actualStylePoints = calculateStylePoints([19.5, 17.5, 19.5, 15.5, 16.5]);

            const expectedStylePoints = 53.5;

            assert.equal(actualStylePoints, expectedStylePoints);
        });

        it('Mixed numbers: ', () => {
            const actualStylePoints = calculateStylePoints([19.5, 20, 19.5, 20, 18]);

            const expectedStylePoints = 59;

            assert.equal(actualStylePoints, expectedStylePoints);
        });
    });
});