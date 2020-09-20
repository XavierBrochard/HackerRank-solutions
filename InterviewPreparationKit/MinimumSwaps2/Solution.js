// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    const _ = require('lodash')
    let swaps = 0;
    const mapElementToIndex = _.zipObject(arr, _.range(0, arr.length))
    const mapIndexToElement = _.zipObject(_.range(0, arr.length), arr)
    for(let i=0; i<arr.length; i++){
        const swapB = mapIndexToElement[i]
        if(swapB != i + 1) {
            swaps++
            const swapA = i + 1
            const swapAIndex = mapElementToIndex[swapA]
            const swapBIndex = mapElementToIndex[swapB]
            arr[swapAIndex] = swapB
            mapElementToIndex[swapB] = swapAIndex
            mapIndexToElement[swapAIndex] = swapB
            arr[swapBIndex] = swapA
            mapElementToIndex[swapA] = swapBIndex
            mapIndexToElement[swapBIndex] = swapA
        }
    }
    return swaps
}