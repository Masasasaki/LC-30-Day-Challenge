const shiftin = (s, dir, amo) => {
	if (dir === 0) {
		for (let i = 0; i < amo; i++) {
			s = s.slice(1, s.length) + s.slice(0, 1)
		}
	} else {
		for (let i = 0; i < amo; i++) {
			s = s.slice(s.length - 1, s.length) + s.slice(0, s.length - 1)
		}
	}
	return s
}

const stringShift = (s, shift) => {
	let totalShift = 0
	shift.forEach(op => {
		totalShift += op[0] === 0 ? -op[1] : op[1]
	})   
	s = totalShift < 0 ? shiftin(s, 0, Math.abs(totalShift)) : shiftin(s, 1, totalShift)
	return s
}

console.log(stringShift("abc", [[0,1],[1,2]]), "cab")
console.log(stringShift("abcdefg", [[1,1],[1,1],[0,2],[1,3]]), "efgabcd")