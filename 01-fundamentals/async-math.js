const { sum, subtract } = require("./math");

const sumAsync = (...args) => Promise.resolve(sum(...args));
const subtractAsync = (...args) => Promise.resolve(subtract(...args));

module.exports = { sumAsync, subtractAsync };
