/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = nums => {
	let map = new Map()
	let len = 0
	let count = 0
    for (let i = 0; i < nums.length; i++) {
		count += nums[i] === 1 ? 1 : -1
		if (count === 0) {
			len = Math.max(len, i + 1)
		} else if (map.has(count)) {
			len = Math.max(len, i - map.get(count))
		} else {
			map.set(count, i)
		}
    }
    return len
}

console.log(findMaxLength([0,1]), 2)
console.log(findMaxLength([0,1,0]), 2)