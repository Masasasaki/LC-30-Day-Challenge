/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = stones => {
    stones.sort((a,b) => a-b)
    while (stones.length > 1) {
        let i = stones.length - 1
        stones[i-1] = stones[i] - stones[i-1]
        stones.splice(i, 1)
        i = stones.length - 1
        if (stones[i] === 0) {
            stones.splice(stones.indexOf(stones[i]), 1)
        } else {
            while (stones.length != 1 && stones[i] < stones[i-1]) {
                let temp = stones[i-1]
                stones[i-1] = stones[i]
                stones[i] = temp
                i--
            }
        }
    }
    let sol = stones.length === 0 ? 0 : stones[0]
    return sol
}

console.log(lastStoneWeight([2,7,4,1,8,1]), 1)