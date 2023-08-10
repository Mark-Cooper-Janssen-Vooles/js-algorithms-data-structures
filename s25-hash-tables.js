// hash('pink', 100) // first argument tkaes key, second takes possible index (0-100)

const hash = (key, arrayLength) => {
  let hash = 0
  for (let i = 0; i < key.length; i++) {
    // one way to hash, use ascii key minus 96, to get order in alphabet 
    const value = key.charCodeAt(i) - 96
    hash = (hash + value) % arrayLength
  }

  return hash
}

console.log(hash('pink', 10))
console.log(hash('cyan', 10))

// problems with above hash:
// 1. only hashes strings (but dont worry about this)
// 2. not constant time - linear in key length, since theres a loop
// 3. could be more random - i.e. more colours than 10