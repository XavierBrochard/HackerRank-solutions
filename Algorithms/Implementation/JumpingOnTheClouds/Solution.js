// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let jumps = 0
    let i = 0
    while(i < c.length - 1) {
        if(c[i+1] == 1) {
            jumps++
            i += 2
        } else {
            if(c[i+2] == 0) {
                jumps++
                i += 2
            } else {
                jumps++
                i +=1
            }
        }
    }
    return jumps
}