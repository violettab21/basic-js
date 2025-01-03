const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arrS1 = s1.split("");
  let buffer = [];
  let arrS2 = s2.split("");
  let count = 0;
  arrS1.forEach((el, i, arr) => {
    buffer = arrS2.filter((element) => el === element);
    if (buffer.length > 0) {
      count += 1;
      arrS2.splice(arrS2.indexOf(el), 1);
    }
  });
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
