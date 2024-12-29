const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let count = 0;

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === "^^") {
        count += 1;
      }
    }
  }
  if (!count) return 0;
  return count;
}
console.log(countCats([
        ['##', 'dd', '00'],
        ['^^', '..', 'ss'],
        ['AA', 'dd', 'Oo'],
      ]));
module.exports = {
  countCats,
};
