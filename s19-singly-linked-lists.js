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
    if (!this.head) {
      this.head = newNode 
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++

    return this
  }

  get(index) {
    if (index + 1 > this.length || index < 0) return undefined
    if (index === 0) return this.head

    let node = this.head
    for (let i = 0; i < index; i++) {
      node = node.next
    }

    return node
  }

  set(index, value) {
    let existingNode = this.get(index)
    if (!existingNode) return false
    existingNode.val = value 

    return true
  }

  // insert(index, value) {
  //   if (index < 0 || index > this.length) return false

  //   if (index === this.length) { // insert onto end
  //     this.push(value)
  //   } else if (index === 0) { // insert onto start
  //     this.unshift(value)
  //   } else { // get previous node (one before index) and current node at index
  //     const newNode = new Node(value)
  //     const currentNode = this.get(index)
  //     const prevNode = this.get(index - 1)
  //     prevNode.next = newNode
  //     newNode.next = currentNode  
  //   }

  //   this.length++

  //   return true
  // }

  insert(index, value) { // refactor
    if (index < 0 || index > this.length) return false

    if (index === this.length) return !!this.push(value)
    if (index === 0) return !!this.unshift(value)
    // get previous node (one before index) and current node at index
    const newNode = new Node(value)
    const currentNode = this.get(index)
    const prevNode = this.get(index - 1)
    prevNode.next = newNode
    newNode.next = currentNode  

    this.length++

    return true
  }
}

const list = new SinglyLinkedList()
list.push('hello')
list.push('world')
list.push('!!!')
list.push('hmm')

// list.pop()
//console.log(list.shift())

//list.unshift('hi')

//console.log(list.get(4))

// console.log(list)
// console.log(list.set(5, 'bye'))


console.log(list.insert(0, 'bye')) // length 5, second value is 'bye'
console.log(list)
