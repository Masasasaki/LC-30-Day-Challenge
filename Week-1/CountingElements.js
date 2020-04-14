/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = arr => {
    let check = new Map()
    arr.forEach(ele => {
        if (!check.has(ele)) {
            check.set(ele, 1)
        } else {
            check.set(ele, check.get(ele) + 1)
        }
    })
    let count = 0
    for (let key of check.keys()) {
        if (check.has(key + 1)) {
            count += check.get(key)
        } 
    }

    return count
}

console.log(countElements([1,2,3]), 2)
console.log(countElements([1,1,3,3,5,5,7,7]), 0)
console.log(countElements([1,3,2,3,5,0]), 3)
console.log(countElements([1,1,2,2]), 2)