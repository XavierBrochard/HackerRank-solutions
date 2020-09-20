// Complete the minimumBribes function below.
function minimumBribes(q) {
    const _ = require('lodash');
    const bribes = {};
    let sorted = false;
    while(!sorted) {
        sorted = true;
        for(let i = 0; i < q.length - 1; i++) {
            const val = q[i];
            const next = q[i+1];
            if(val > next) {
                q[i] = next;
                q[i+1] = val;
                bribes[val] = (bribes[val] || 0) + 1;
                if(bribes[val] > 2) {
                    console.log('Too chaotic');
                    return;
                }
                sorted = false;
            }
        }
    }
    console.log(_.reduce(bribes, (result, value) => result + value, 0));
}