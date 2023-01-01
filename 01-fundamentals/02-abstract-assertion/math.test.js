// 1. have a bug
const { sum, subtract } = require("./math");

let result = sum(3, 7);
let expected = 10;

// 2. throw error when result is unexpected
expect(result).toBe(expected);

result = subtract(result, expected);
expected = 4;

expect(result).toBe(expected);

/**
 * @description
 * - kind of assertion library
 * - could add assertion here to make writing a test easier
 */
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEquals(expected) {},
  };
};
