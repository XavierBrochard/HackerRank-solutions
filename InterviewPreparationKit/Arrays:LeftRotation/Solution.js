// Complete the rotLeft function below.
function rotLeft(a, d) {
    const rotLeftOnce = array => {
        const el = array.shift()
        array.push(el)
    }
    for(var i=0; i < d; i++){
        rotLeftOnce(a);
    }
    return a
}