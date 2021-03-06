// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  const _ = require("lodash");
  const magazineWords = _.countBy(magazine, (x) => x);
  for (const word of note) {
    magazineWords[word] = magazineWords[word] ? magazineWords[word] - 1 : -1;
  }
  for (const word in magazineWords) {
    if (magazineWords[word] < 0) {
      console.log("No");
      return;
    }
  }
  console.log("Yes");
}
