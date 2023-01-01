// 1. have a bug
const { sum, subtract } = require("./math");

let result = sum(3, 7);
let expected = 10;

// 2. throw error when result is unexpected
if (result !== expected) {
  // 3. quickly identify what the problem with fix it
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(result, expected);
expected = 4;

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
