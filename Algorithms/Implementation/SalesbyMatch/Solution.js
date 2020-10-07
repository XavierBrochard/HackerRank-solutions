// Functional programming for the win!
const flow = require("lodash/fp/flow");
const countBy = require("lodash/fp/countBy");
const filter = require("lodash/fp/filter");
const reduce = require("lodash/fp/reduce");
const identity = require("lodash/fp/identity");

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  return flow(
    countBy(identity),
    filter((c) => c > 1),
    reduce((sum, i) => sum + (i % 2 === 0 ? i : i - 1) / 2, 0)
  )(ar);
}
