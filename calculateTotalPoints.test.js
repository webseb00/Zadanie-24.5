const assert = require("assert");
const calculateTotalPoints = require("./calculateTotalPoints");

describe("Total Points", () => {
    // normal hill:
    it("Positive and negative additional points for wind/gate: ", () => {
        const actual = calculateTotalPoints(105, 'normal', 98, [18.5, 18, 18, 18.5, 17.5], -12.3, 3.2);

        const expected = 119.4;

        assert.equal(actual, expected);
    });
    // large hill:
    it("Both negative additional points for wind/gate: ", () => {
        const actual = calculateTotalPoints(132, 'large', 120, [18.5, 19, 19.5, 20, 19], -1, -5.9);

        const expected = 132.2;

        assert.equal(actual, expected);
    });
    // flying hill:
    it("Positive points for wind/gate: ", () => {
        const actual = calculateTotalPoints(193, 'flying', 200, [19, 18.5, 16, 18.5, 19], 15, 3);

       const expected = 185.6;

        assert.equal(actual, expected);
    });
});