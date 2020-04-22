/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
    let count = 0
    let map = new Map()
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum === k) count++
        if (map.has(sum - k)) count += map.get(sum - k)
        let c = map.get(sum)
        if (c) {
            map.set(sum, c + 1)
        } else {
            map.set(sum, 1)
        }
    }
    return count
}

console.log(subarraySum([1], 0), 0)
console.log(subarraySum([1,1,1], 3), 1)
console.log(subarraySum([1,1,1], 2), 2)
console.log(subarraySum([4,2,1,1,2,1,3,4,5,4,3,2], 3), 5)