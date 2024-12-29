const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = [];
    let arrays = arr.filter((el) => Array.isArray(el));
    if (arrays.length === 0) return 1;
    else {
      arrays.forEach((el) => {
        depth.push(1 + this.calculateDepth(el));
      });
      depth.sort((a, b) => b - a);
      return depth[0];
    }
  }
}

module.exports = {
  DepthCalculator,
};
