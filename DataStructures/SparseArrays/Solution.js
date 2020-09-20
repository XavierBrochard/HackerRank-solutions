// Complete the matchingStrings function below.
function matchingStrings(strings, queries) {
    const map = {};
    queries.forEach((q,i) => strings.forEach(s => {
        map[q+i] = map[q+i] || 0;
        if(q === s) map[q+i]++;
    }))
    console.log(map)
    return Object.values(map);
}
