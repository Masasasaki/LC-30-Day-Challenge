const singleNumber = nums => {
    const m = new Map()
    let answer = 0
    nums.forEach((num, index) => {
        m.set(num, 0)
    })
    nums.forEach((num, index) => {
        m.set(num, m.get(num) + 1)
    })
    for (const [k, v] of m.entries()) {
        if (v === 1) {
            answer = k
        }
    }
    return answer
}

console.log(singleNumber([2,2,1]), 1)
console.log(singleNumber([4,1,2,1,2]), 4)