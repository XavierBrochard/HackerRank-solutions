function hourglassSum(arr) {
    const assert = require('assert').strict;
    let Hourglass = class {
        constructor(values) {
            assert(values.length == 7)
            this.values = values
        }
        getSum() {
            return this.values.reduce((acc, val) => acc + val, 0)
        }
    }

    const hourglasses = []
    for(let i = 0; i <= 3; i++) {
        for(let j = 0; j <= 3; j++) {
            hourglasses.push(new Hourglass([
                arr[i][j],
                arr[i][j+1],
                arr[i][j+2],
                arr[i+1][j+1],
                arr[i+2][j],
                arr[i+2][j+1],
                arr[i+2][j+2]
            ]))
        } 
    }
    const sums = hourglasses.map(h => h.getSum())
    return Math.max(...sums)
}