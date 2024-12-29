const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let key = arr.filter((el) => typeof el === "string");
  let result = arr.slice();
  key.forEach((el) => {
    let prev = arr[arr.indexOf(el) - 1];
    switch (el) {
      case "--double-next": {
        result = result.map((e, i, arr) => {
          if (e === el && i < arr.length - 1) return arr[i + 1];
          else return e;
        });
        if (result.indexOf(el) === arr.length - 1) result.splice(-1);
        break;
      }
      case "--double-prev": {
        let currentPrev = result[result.indexOf(el) - 1];
        if (currentPrev !== prev) result.splice(result.indexOf(el), 1);
        result = result.map((e, i, arr) => {
          if (e === el && i > 0) return arr[i - 1];
          else return e;
        });
        if (result.indexOf(el) === 0) result.splice(0, 1);
        break;
      }
      case "--discard-next": {
        let index = result.indexOf(el) + 1;
        if (result.indexOf(el) === arr.length - 1) result.splice(-1);
        else result.splice(index - 1, 2);
        break;
      }
      case "--discard-prev": {
        let currentPrev = result[result.indexOf(el) - 1];
        if (currentPrev !== prev) result.splice(result.indexOf(el), 1);
        else {
          let index = result.indexOf(el) - 1;
          if (result.indexOf(el) === 0) result.splice(0, 1);
          else result.splice(index, 2);
        }

        break;
      }
    }
  });

  return result;
}
console.log(
  transform([1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5])
);
module.exports = {
  transform,
};
