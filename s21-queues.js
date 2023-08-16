// using array:
const queue = []
queue.push("FIRST")
queue.push("THIRD") // adds to end of queue 
queue.push("THIRD") // adds to end 
queue.shift() // removes from beginning of queue => ["SECOND", "THIRD"]

// problem: using array, removing from beginning of array requires re-indexing everything. 

// --------------------

// for optimal Big O, we will use singly linked list where we add to the end and remove from the beginning 

class Node {
  constructor(value) {
    this.value = value 
    this.next = null 
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // add to the end 
  enqueue(value) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
      this.tail = node 
    } else {
      const tempTail = this.tail
      this.tail = node
      tempTail.next = node
    }
    this.length++
  }

  // remove from the start
  dequeue() {
    if (!this.head) return undefined 
    const oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
    }
    this.length--

    return oldHead.value
  }
}

const q = new Queue()

q.enqueue('1')
q.enqueue('2')
q.enqueue('3')

console.log(q)

q.dequeue() // expect: head 2, tail 3, length 2
console.log(q)
q.dequeue() // expect: head 3, tail 3, length 1
console.log(q)
q.dequeue() // expect null length 0
console.log(q)

