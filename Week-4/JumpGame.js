/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = nums => {
    let T = new Array(nums.length)
    for (let i = 0; i < nums.length; i++) {
        T[i] = false
    }
    T[nums.length - 1] = true

    for (let i = nums.length - 2; i >= 0; i--) {
        let jump = Math.min(i + nums[i], nums.length - 1)
        for (let j = i + 1; j <= jump; j++) {
            if (T[j]) {
                T[i] = true
                break
            }
        }
    }
    return T[0] === true
}