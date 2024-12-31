const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split("");
  let indexToDelete = arr.findIndex((el, i, array) => el < array[i + 1]);
  arr.splice(indexToDelete, 1);
  return +arr.join("");
}

module.exports = {
  deleteDigit,
};
