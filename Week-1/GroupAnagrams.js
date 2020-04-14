/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
    if (strs.length == 0) {
      return new Array()
    }

    const sol = {}
    strs.forEach(str => {
      const alpha = str.split('').sort().join('')
      if (sol[alpha]) {
        sol[alpha].push(str)
      } else {
        sol[alpha] = [str]
      }
    })

    return Object.values(sol)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log([["ate","eat","tea"],["nat","tan"],["bat"]])