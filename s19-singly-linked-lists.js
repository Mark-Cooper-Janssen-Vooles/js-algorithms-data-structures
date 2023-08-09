class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

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

  insert(index, value) {
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

  remove(index) {
    if (index < 0 || index > this.length) return false
    if (index === this.length - 1) return this.pop()
    if (index === 0) return this.shift()
    // get previous node (one before index) and current node at index
    const deletedNode = this.get(index)
    const prevNode = this.get(index - 1)
    prevNode.next = deletedNode.next
    this.length--

    return deletedNode
  }

  reverse() {
    let leftPointer = 0
    let rightPointer = this.length - 1

    while (rightPointer > leftPointer) {
      // swap leftNode to right 
      const leftNode = this.remove(leftPointer)
      this.insert(rightPointer, leftNode.val)

      // swap rightNode to left (decrement by one, since leftNode is now the "rightest")
      const rightNode = this.remove(rightPointer - 1) 
      this.insert(leftPointer, rightNode.val)

      // increment / decrement both pointers 
      leftPointer++
      rightPointer--
    }

    return this
  }

  print() {
    console.log(JSON.stringify(this))
  }
}

const list = new SinglyLinkedList()
list.push('!!!')
list.push('party')
list.push('go')
list.push('lets')
list.push('barbie')
list.push('on')
list.push('come')
//list.push('hmm')

// list.pop()
//console.log(list.shift())

//list.unshift('hi')

//console.log(list.get(4))

// console.log(list)
// console.log(list.set(5, 'bye'))

//console.log(list.insert(0, 'bye')) // length 5, second value is 'bye'

//console.log(list.remove(3))

list.print()
list.reverse() 
list.print() // 'come', 'on', 'barbie', 'lets', 'go', 'party', '!!!'
