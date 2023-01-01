// 1. have a bug
const { sum, subtract } = require("../math");

let result, expected;

function sumTest() {
  result = sum(3, 7);
  expected = 10;
  expect(result).toBe(expected);
}

test("sum adds numbers", sumTest);

function subtractTest() {
  result = subtract(7, 3);
  expected = 4;
  expect(result).toBe(expected);
}

test("subtract subtracts numbers", subtractTest);

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
};
