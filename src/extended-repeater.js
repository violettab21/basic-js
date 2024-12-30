const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arr = [];
  let add = "";
  let repeat = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let mainSeparator = options.separator !== undefined ? options.separator : "+";
  let addSeparator =
    options.additionSeparator !== undefined ? options.additionSeparator : "|";
  let additionString =
    options.addition !== undefined ? String(options.addition) : "";
  if (additionString) {
    add = repeater(additionString, {
      repeatTimes: options.additionRepeatTimes,
      separator: addSeparator,
    });
  }

  for (let i = 0; i < repeat; i += 1) {
    arr[i] = `${str}${add}`;
  }
  return arr.join(`${mainSeparator}`);
}
console.log(
  repeater(true, {
    repeatTimes: 3,
    separator: "??? ",
    addition: false,
    additionRepeatTimes: 2,
    additionSeparator: "!!!",
  })
);
module.exports = {
  repeater,
};
