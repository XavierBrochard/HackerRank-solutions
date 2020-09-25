const _ = require('lodash')

/**
 * Given a string s, returns a map that counts occurences of each letter.
 * @example s="hello" will return {"h":1, "e":1, "l":2, "o":1}
 */
const toCountingMap = string => {
    let coutingMap = {}
    string.split('').forEach(s => coutingMap[s] = (coutingMap[s] || 0) + 1)
    return coutingMap
}

/**
 * getAllSubstrings("hello") => ["h", "e", "l", "l", "o", "he", "el", "ll", "lo", "hel", "ell", "llo", "hell", "ello"]
 */
const getAllSubstrings = s => {
    const substrings = []
    for(let i = 1; i < s.length; i++) {
        let j=0
        while(j <= s.length - i) {
            substrings.push(s.substring(j, j+i))
            j++
        }
    }
    return substrings
}

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    const substrings = getAllSubstrings(s)
    const sorted = substrings.map(s => s.split('').sort().join(''))
    const counted = _.countBy(sorted)
    const withoutsingles = _.filter(counted, val => val != 1)
    return _.reduce(withoutsingles, (sum,n) => sum+n*(n-1)/2, 0)
}