/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const rangeBitwiseAnd = (m, n) => {
    let i = 0
    while (m != n) {
        m >>= 1
        n >>= 1
        i++
    }
    return m << i
}