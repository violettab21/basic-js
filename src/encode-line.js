const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arrFromString = str.split("");
  let res = arrFromString.slice();
  let count = 1;
  arrFromString.forEach((el, i, array) => {
    if (el === array[i + 1]) {
      count += 1;
      if (res.indexOf(el) === 0 || count - 1 === 1)
        res.splice(res.indexOf(el), count - 1, count);
      else res.splice(res.indexOf(el) - 1, 2, count);
    } else count = 1;
  });
  return res.join("");
}
console.log(encodeLine("aaaatttt"));
module.exports = {
  encodeLine,
};
