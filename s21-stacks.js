// i.e. browser history

const stack = []
stack.push("google") 
stack.push("instagram") // adds to end of array
stack.push("youtube") // adds to end of array

stack.pop() // removes from end of array 

// using push and pop ONLY on an array is a stack

// ------------------------

// i.e. using photoshop 
const stack2 = []
stack2.unshift("create") 
stack2.unshift("resize") // adds to beginning

stack2.shift() // removes from beginning

// using shift and unshift in an array adding to beginnng and removing from beginning has a worse big O because we have to re-index all the items, so way more efficient to use push and pop. 

// ------------------------

// actually better to use a linked list for a stack for efficiency:
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedListStack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(value) { // push to the start, else we need to traverse to the end increasing Big O
    const node = new Node(value)
    if (this.size === 0) {
      this.first = node
      this.last = node 
      this.size = this.size + 1
    } else {
      const oldFirst = this.first
      node.next = oldFirst
      this.first = node
      this.size = this.size + 1
    }

    return this.size
  }

  pop() { // pop off the start
    if (!this.first) return undefined 
    const oldFirst = this.first
    if (this.size === 1) {
      this.last = null
    }
    this.first = oldFirst.next 
    this.size = this.size - 1

    return oldFirst.value
  }

}

const slStack = new SinglyLinkedListStack()
slStack.push("FIRST")
slStack.push("SECOND")
slStack.push("THIRD")

console.log(slStack)

console.log(slStack.pop()) // should return "THIRD"

slStack.pop()
slStack.pop()
console.log(slStack)
