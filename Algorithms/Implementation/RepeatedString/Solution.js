// Complete the repeatedString function below.
function repeatedString(s, n) {
    const sLength = s.length
    const times = Math.floor(n / sLength)
    const extraChars = n - times*sLength
    const hitsIn = string => string.split('').filter(c => c == 'a').length
    const hitsInBasePattern = hitsIn(s)
    const hitsInExtraCharts = hitsIn(s.substring(0,extraChars))
    return hitsInBasePattern*times + hitsInExtraCharts
}