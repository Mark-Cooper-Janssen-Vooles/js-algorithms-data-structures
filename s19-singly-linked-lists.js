class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// const first = new Node('hi')
// first.next = new Node('there')
// first.next.next = new Node('world')

// console.log(first)

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(element) {
    const node = new Node(element)

    if (this.length === 0) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }

    this.length = this.length + 1
    return this
  }

  pop() {
    let currentNode = this.head
    if (currentNode === null) return undefined 
    if (this.length === 1) {
      this.head = null
      this.tail = null
      this.length = 0

      return currentNode
    }

    while (currentNode) {
      if (!currentNode.next.next) { // we're at one before tail
        let oldTail = this.tail 
        this.tail = currentNode
        currentNode.next = null
        this.length = this.length - 1
        return oldTail
      }

      currentNode = currentNode.next
    }
  }

  shift() {
    if (!this.head) return undefined
    const oldHead = this.head 
    this.head = this.head.next
    this.length--

    return oldHead
  }

  unshift(val) {
    const newNode = new Node(val)
    if (this.head) {
      newNode.next = this.head
    }
    this.head = newNode
    this.length++

    return this
  }
}

const list = new SinglyLinkedList()
list.push('hello')
list.push('world')
list.push('!!!')

// list.pop()
//console.log(list.shift())

list.unshift('hi')

console.log(list)
