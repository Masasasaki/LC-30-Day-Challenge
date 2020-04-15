/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
    let leftArr = new Array(nums.length)
    let rightArr = new Array(nums.length)
    leftArr[0] = 1
    for (let i = 1; i < nums.length; i++) {
        leftArr[i] = leftArr[i-1] * nums[i-1]
    }
    rightArr[nums.length - 1] = 1
    for (let i = nums.length - 2; i >= 0; i--) {
        rightArr[i] = rightArr[i+1] * nums[i+1]
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = leftArr[i] * rightArr[i]
    }
    return nums
}

console.log(productExceptSelf([1,2,3,4]), [24, 12, 8, 6])
console.log(productExceptSelf([0,0]), [0,0])