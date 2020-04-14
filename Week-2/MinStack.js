class Node {
    constructor(data, next, min) {
        this.data = data
        this.next = next
        this.min = min
    }
    
    getData() {
        return this.data
    }
    
    getNext() {
        return this.next
    }

    getMin() {
        return this.min
    }
    
    setNext(next) {
        this.next = next
    }
}

class MinStack {
    constructor() {
        this.head = null
        this.size = 0
    }

    push(x) {
        if (this.size === 0) {
            this.head = new Node(x, null, x)
        } else {
            let min = this.head.getMin() > x 
                ? x
                : this.head.getMin()
            let add = new Node(this.head.getData(), this.head.getNext(), this.head.getMin())
            this.head = new Node(x, add, min)
        }
        this.size++
    }

    pop() {
        if (this.size !== 0) {
            if (this.size === 1) {
                this.size--
                this.head = null
            } else {
                this.head = this.head.getNext()
                this.size--
            }
        }
    }

    top() {
        if (this.size === 0) {
            return null
        }
        return this.head.getData()
    }

    getMin() {
        return this.head.getMin()
    }
}

let minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
console.log(minStack.getMin(), -3)
minStack.pop()
console.log(minStack.top(), 0)
console.log(minStack.getMin(), -2)