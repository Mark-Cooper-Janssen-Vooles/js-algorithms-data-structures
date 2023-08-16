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

// actually better to use a linked list for a stack for efficiency 

