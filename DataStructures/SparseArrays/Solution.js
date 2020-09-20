// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
    const map = {};
    queries.forEach((q,i) => strings.forEach(s => {
        // We compute a hash key that uses the query and its index 
        // so that the keys do not collide when we have duplicate queries
        map[q+i] = map[q+i] || 0; 
        if(q === s) map[q+i]++;
    }))
    console.log(map)
    return Object.values(map);
}
