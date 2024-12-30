const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error("Incorrect arguments!");
    let arr = message.toLowerCase().split("");
    let shifts = key
      .toLowerCase()
      .split("")
      .map((el) => el.charCodeAt(0) - 97);
    let initialShiftsSize = shifts.length;
    let initialShifts = shifts.slice();
    let count = 0;
    arr.forEach((el, i, array) => {
      count++;
      if (
        el.charCodeAt(0) >= 97 &&
        el.charCodeAt(0) <= 122 &&
        i > initialShiftsSize - 1
      ) {
        shifts.splice(i, 0, initialShifts.at((count % initialShiftsSize) - 1));
      } else if (el.charCodeAt(0) < 97 || el.charCodeAt(0) > 122) {
        count--;
        shifts.splice(i, 0, 0);
      }
    });
    arr = arr.map((el, i) => {
      if (el.charCodeAt(0) < 97 || el.charCodeAt(0) > 122) return el;
      if (el.charCodeAt(0) + shifts[i] <= 122)
        return String.fromCharCode(el.charCodeAt(0) + shifts[i]);
      else
        return String.fromCharCode(el.charCodeAt(0) + shifts[i] - 122 + 97 - 1);
    });
    if (this.isDirect === false) return arr.reverse().join("").toUpperCase();
    return arr.join("").toUpperCase();
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined)
      throw new Error("Incorrect arguments!");
    let arr = message.toLowerCase().split("");
    let shifts = key
      .toLowerCase()
      .split("")
      .map((el) => el.charCodeAt(0) - 97);
    let initialShiftsSize = shifts.length;
    let initialShifts = shifts.slice();
    let count = 0;
    arr.forEach((el, i, array) => {
      count++;
      if (
        el.charCodeAt(0) >= 97 &&
        el.charCodeAt(0) <= 122 &&
        i > initialShiftsSize - 1
      ) {
        shifts.splice(i, 0, initialShifts.at((count % initialShiftsSize) - 1));
      } else if (el.charCodeAt(0) < 97 || el.charCodeAt(0) > 122) {
        count--;
        shifts.splice(i, 0, 0);
      }
    });
    arr = arr.map((el, i) => {
      if (el.charCodeAt(0) < 97 || el.charCodeAt(0) > 122) return el;
      if (el.charCodeAt(0) - shifts[i] >= 97)
        return String.fromCharCode(el.charCodeAt(0) - shifts[i]);
      else
        return String.fromCharCode(el.charCodeAt(0) - shifts[i] + 122 - 97 + 1);
    });
    if (this.isDirect === false) return arr.reverse().join("").toUpperCase();
    return arr.join("").toUpperCase();
  }
}
const directMachine = new VigenereCipheringMachine();
console.log(directMachine.encrypt("-Q8.|", "kz"));
console.log(directMachine.decrypt("UWJJW XAGWLNFM VNNNDXHVWWL :)", "jz"));

const reverseMachine = new VigenereCipheringMachine(false);
console.log(reverseMachine.encrypt("attack at dawn!", "alphonse"));
console.log(reverseMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
module.exports = {
  VigenereCipheringMachine,
};
//'Example of sequence: 1, 2, 3, 4.', 'lilkey'), 'PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.'
//'XVPNECTXKTFU'
// 'KAYIWIAMMOUIW'
