/**
 * Async function return promise
 * - test function callback also return a promise
 */
const { sumAsync, subtractAsync } = require("../async-math");

test("sumAsync adds numbers asynchronously", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", async () => {
  const result = await subtractAsync(7, 3);
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
