/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */
function countingValleys(steps, path) {
    // Write your code here
    const flow = require('lodash/fp/flow')
    const map = require('lodash/fp/map')
    const reduce = require('lodash/fp/reduce')
    let nValley = 0;
    flow(
        // Transform [U,D,D,U,...] in [1,-1,-1,1,...]
        map(step => step == "U" ? 1 : -1),
        reduce((sum, step) => {
            // A valley ends on a "U" step when at altitude -1
            if (step == 1 && sum == -1) nValley++; 
            return sum + step;
        }, 0)
    )(path.split(''));
    return nValley;
}