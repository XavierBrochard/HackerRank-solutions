// Complete the twoStrings function below.
function twoStrings(s1, s2) {
  const _ = require("lodash");
  const ins = _.intersection(s1.split(""), s2.split(""));
  return ins.length > 0 ? "YES" : "NO";
}
