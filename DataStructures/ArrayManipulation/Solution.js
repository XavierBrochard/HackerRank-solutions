// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    const map = {};
    for(let i = 1; i <= n; i++) {
        map[i] = 0;
    }
    queries.forEach(q => {
        const left = q[0];
        const right = q[1];
        const value = BigInt(q[2]);
        map[left] = (map[left] || BigInt(0)) + value;
        if(right < n) {
            map[right+1] = (map[right+1] || BigInt(0)) - value
        }
    })
    console.log(map)
    for(let i = 1; i <= n; i++) {
        map[i] = (Number(map[i-1]) || 0) + Number(map[i]);
    }
    console.log(map)
    return Math.max(...Object.values(map));
}