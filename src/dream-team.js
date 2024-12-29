const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let name = "";
  if (!Array.isArray(members)) return false;
  name = members
    .filter((el) => typeof el === "string")
    .map((el) => {
      let trimmed = el.trim();
      return trimmed[0].toUpperCase();
    })
    .sort()
    .join("");
  return name;
}
console.log(
  createDreamTeam([
    ["David Abram"],
    ["Robin Attfield"],
    "Thomas Berry",
    ["Paul R.Ehrlich"],
    "donna Haraway",
    " BrIaN_gOodWiN  ",
    {
      0: "Serenella Iovino",
    },
    "Erazim Kohak",
    "  val_plumwood",
  ])
);
module.exports = {
  createDreamTeam,
};
