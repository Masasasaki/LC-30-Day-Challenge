/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    if (nums.length === 0) {
        return -1
    }
    let startPoint = nums.indexOf(Math.min(...nums))
    if (nums[0] === target) {
        return 0
    }
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        let mid = Math.floor((l+r)/2)
        let realMid = (mid + startPoint) % nums.length
        if (nums[realMid] === target) {
            return realMid
        } else if (nums[realMid] > target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return -1
}

console.log(search([4,5,6,7,0,1,2], 0), 4)
console.log(search([4,5,6,7,0,1,2], 3), -1)
console.log(search([3,1], 3), 0)
console.log(search([3,3,3,3,3,3,3,3,3,3,3,3], 3), 0)
console.log(search([3], 3), 0)