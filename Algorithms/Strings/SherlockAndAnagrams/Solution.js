const _ = require("lodash");

/**
 * getAllSubstrings("hello") returns ["h", "e", "l", "l", "o", "he", "el", "ll", "lo", "hel", "ell", "llo", "hell", "ello"]
 */
const getAllSubstrings = (s) => {
  const substrings = [];
  for (let i = 1; i < s.length; i++) {
    let j = 0;
    while (j <= s.length - i) {
      substrings.push(s.substring(j, j + i));
      j++;
    }
  }
  return substrings;
};

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
  const substrings = getAllSubstrings(s);
  const sorted = substrings.map((s) => s.split("").sort().join(""));
  const counted = _.countBy(sorted);
  const withoutsingles = _.filter(counted, (val) => val !== 1);
  return _.reduce(withoutsingles, (sum, n) => sum + (n * (n - 1)) / 2, 0);
}
