/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => {
    let i = S.length - 1
    let j = T.length - 1
    let skipS = 0
    let skipT = 0
    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (S.charAt(i) === '#') {
                skipS++
                i--
            } else if (skipS > 0) {
                skipS--
                i--
            }
            else {
                break
            }
        }
        
        while (j >= 0) {
            if (T.charAt(j) === '#') {
                skipT++
                j--
            } else if (skipT > 0) {
                skipT--
                j--
            }
            else {
                break
            }
        }
        
        if ((i >= 0) != (j >= 0) || (i >= 0 && j >= 0 && S.charAt(i) != T.charAt(j))) {
            return false
        }
        i--
        j--
    }
    return true
}

console.log(backspaceCompare("ab#c", "ad#c"), true)
console.log(backspaceCompare("ab##", "c#d#"), true)
console.log(backspaceCompare("a##c", "#a#c"), true)
console.log(backspaceCompare("a#c", "b"), false)
console.log(backspaceCompare("abde", "abde"), true)
console.log(backspaceCompare("bxj##tw", "bxo#j##tw"), true)
console.log(backspaceCompare("hd#dp#czsp#####", "hd#dp#cs#zspj######"), true)