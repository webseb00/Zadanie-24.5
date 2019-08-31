const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    // normal hill - Alpensia Ski Jump:
    describe('normal hill', () => {
		it('jump less than kPoint', () => {
            const actual = calculateDistancePoints(84, 'normal', 98);
    
            const expected = 32;
    
            assert.equal(actual, expected);
        });
		
		it('jump equal to kPoint', () => {
            const actual = calculateDistancePoints(98, 'normal', 98);

            const expected = 60;

            assert.equal(actual, expected);
        });

        it('jump bigger than kPoint', () => {
            const actual = calculateDistancePoints(111, 'normal', 98);

            const expected = 86;

            assert.equal(actual, expected);
        });
    });
    // large hill - Zakopane:
    describe('large hill', () => {
        it('jump less than kPoint', () => {
            const actual = calculateDistancePoints(113, 'large', 120);

            const expected = 47.4;

            assert.equal(actual, expected);
        });

        it('jump equal to kPoint', () => {
            const actual = calculateDistancePoints(120, 'large', 120);

            const expected = 60;

            assert.equal(actual, expected);
        });

        it('jump bigger than kPoint', () => {
            const actual = calculateDistancePoints(134, 'large', 120);

            const expected = 85.2;

            assert.equal(actual, expected);
        });
    });
    // flying hill - Planica:
    describe('flying hill', () => {
        it('jump less than kPoint', () => {
            const actual = calculateDistancePoints(170, 'flying', 200);

            const expected = 84;

            assert.equal(actual, expected);
        });

        it('jump equal to kPoint', () => {
            const actual = calculateDistancePoints(200, 'flying', 200);

            const expected = 120;

            assert.equal(actual, expected);
        });

        it('jump bigger than kPoint', () => {
            const actual = calculateDistancePoints(226, 'flying', 200);

            const expected = 151.2;

            assert.equal(actual, expected);
        });
    });
    // small hill:
    describe('small hill', () => {
        it('jump less than kPoint', () => {
            const actual = calculateDistancePoints(84, 'small', 98);

            const expected = 32;

            assert.equal(actual, expected);
        });
    });
});