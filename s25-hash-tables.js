// hash('pink', 100) // first argument tkaes key, second takes possible index (0-100)

// const hash = (key, arrayLength) => {
//   let hash = 0
//   for (let i = 0; i < key.length; i++) {
//     // one way to hash, use ascii key minus 96, to get order in alphabet 
//     const value = key.charCodeAt(i) - 96
//     hash = (hash + value) % arrayLength
//   }

//   return hash
// }

// console.log(hash('pink', 10))
// console.log(hash('cyan', 10))

// ====================

// problems with above hash:
// 1. only hashes strings (but dont worry about this)
// 2. not constant time - linear in key length, since theres a loop
// 3. could be more random - i.e. more colours than 10

// improved code: 
const hash = (key, arrayLength) => {
  let hash = 0
  let WEIRD_PRIME = 31
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    // one way to hash, use ascii key minus 96, to get order in alphabet 
    const value = key[i].charCodeAt(0) - 96
    hash = (hash * WEIRD_PRIME + value) % arrayLength
  }

  return hash
}

// console.log(hash('pink', 13)) // 5
// console.log(hash('cyan', 13)) // 5

// =================================================================

// a hashtable class 

class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      // one way to hash, use ascii key minus 96, to get order in alphabet 
      const value = key[i].charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
  
    return total
  }

  set(key, value) {
    const index = this._hash(key)
    // structure looks like this first run: 
    // [ , , , , ]
    // then we add our item. 
    // if undefined, set empty array first:
    // [ , , [] , ]
    // then simply push it onto array:
    // [ , , [['key', 'value']] , ]
    if (this.keyMap[index] === undefined) {
      this.keyMap[index] = []
    } 
    this.keyMap[index].push([key, value])

    return index
  }

  get(key) {
    const index = this._hash(key)
    if (this._keyMap[index] === undefined) return undefined

    if (Array.isArray(this.keyMap[index])) {
      // if is array
      this._keyMap[index].forEach((value) => {
        if (key === value) {
          return value
        }
      })

    } else {
      // if single value 
      return this._keyMap[index]
    }
  }
}

const ht = new HashTable(4)
//console.log(ht._hash('hi'))
ht.set('hello', 'goodbye')
ht.set('dogs', 'cats')
ht.set('barbie', 'oppenheimer')
console.log(ht.keyMap)