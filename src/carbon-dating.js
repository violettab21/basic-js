const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let activity;
  if (+sampleActivity && typeof sampleActivity === "string") {
    activity = +sampleActivity;
    if (activity > MODERN_ACTIVITY || activity < 0) return false;
  } else return false;
  const LOG_TWO = 0.693;
  let k = LOG_TWO / HALF_LIFE_PERIOD;
  let t = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k);
  return t;
}
console.log(dateSample("-5"));
module.exports = {
  dateSample,
};
