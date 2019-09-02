const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    // normal hill - Alpensia Ski Jump:
    describe('normal hill', () => {
		it('jump less than kPoint', () => {
            const actualDistancePoints = calculateDistancePoints(84, 'normal', 98);
    
            const expectedDistancePoints = 32;
    
            assert.equal(actualDistancePoints, expectedDistancePoints);
        });
		
		it('jump equal to kPoint', () => {
            const actualDistancePoints = calculateDistancePoints(98, 'normal', 98);

            const expectedDistancePoints = 60;

            assert.equal(actualDistancePoints, expectedDistancePoints);
        });

        it('jump bigger than kPoint', () => {
            const actualDistancePoints = calculateDistancePoints(111, 'normal', 98);

            const expectedDistancePoints = 86;

            assert.equal(actualDistancePoints, expectedDistancePoints);
        });
    });
    // large hill - Zakopane:
    describe('large hill', () => {
        it('jump less than kPoint', () => {
            const actualDistancePoints = calculateDistancePoints(113, 'large', 120);

            const expectedDistancePoints = 47.4;

            assert.equal(actualDistancePoints, expectedDistancePoints);
        });

        it('jump equal to kPoint', () => {
            const actualDistancePoints = calculateDistancePoints(120, 'large', 120);

            const expectedDistancePoints = 60;

            assert.equal(actualDistancePoints, expectedDistancePoints);
        });

        it('jump bigger than kPoint', () => {
            const actualDistancePoints = calculateDistancePoints(134, 'large', 120);

            const expectedDistancePoints = 85.2;

            assert.equal(actualDistancePoints, expectedDistancePoints);
        });
    });
    // flying hill - Planica:
    describe('flying hill', () => {
        it('jump less than kPoint', () => {
            const actualDistancePoints = calculateDistancePoints(170, 'flying', 200);

            const expectedDistancePoints = 84;

            assert.equal(actualDistancePoints, expectedDistancePoints);
        });

        it('jump equal to kPoint', () => {
            const actualDistancePoints = calculateDistancePoints(200, 'flying', 200);

            const expectedDistancePoints = 120;

            assert.equal(actualDistancePoints, expectedDistancePoints);
        });

        it('jump bigger than kPoint', () => {
            const actualDistancePoints = calculateDistancePoints(226, 'flying', 200);

            const expectedDistancePoints = 151.2;

            assert.equal(actualDistancePoints, expectedDistancePoints);
        });
    });
    // small hill:
    describe('small hill', () => {
        it('jump less than kPoint', () => {
            const actualDistancePoints = calculateDistancePoints(84, 'small', 98);

            const expectedDistancePoints = 32;

            assert.equal(actualDistancePoints, expectedDistancePoints);
        });
    });
});