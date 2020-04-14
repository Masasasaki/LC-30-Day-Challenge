/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = n => {
    let mem = new Array()
    let happy = false
    let i = 0
    while (!happy) {
        if (mem.includes(n)) {
          break
        }
        mem[i++] = n
        n = n.toString().split('').map(Number)
        n = n.length === 1 
          ? n[0] ** 2 
          : n.reduce((total, num, i) => i === 1 ? (total ** 2) + (num ** 2) : total + (num ** 2))
        if (n === 1) {
          happy = true
        }
    }
    return happy
}

console.log(isHappy(19), true)