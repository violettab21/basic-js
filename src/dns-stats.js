const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let re = /.\w+/g;
  let result = {};
  let arraysOfDNS = domains
    .map((el) => {
      let find = el.match(re);
      find[0] = "." + find[0];
      return find.reverse().map((el, i, arr) => arr.slice(0, 1 + i).join(""));
    })
    .flat();
  arraysOfDNS.forEach((el, i, array) => {
    if (result[el] === undefined) {
      let buffer = array.filter((element) => (el === element));
      result[el] = buffer.length;
    }
  });
  return result;
}

module.exports = {
  getDNSStats,
};
