/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = nums => {
    let maxLen = nums[0]
    let maxEnd = nums[0]
    for (let i = 1; i < nums.length; i++) {
        maxEnd = Math.max(nums[i], maxEnd + nums[i])
        maxLen = Math.max(maxLen, maxEnd)
    }
    return maxLen
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), 6)