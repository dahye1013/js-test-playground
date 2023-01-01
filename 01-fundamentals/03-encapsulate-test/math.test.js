const { sum, subtract } = require("../math");
/**
 * Why Test
 * 1. easier identify what's broken
 * 2. can fix it quickly
 * -> need helpful error message
 */

test("sum adds numbers", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.error(`❌ ${title}`);
    console.error(error);
  }
}

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
}
