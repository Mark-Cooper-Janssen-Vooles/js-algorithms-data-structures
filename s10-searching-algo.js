// function accepts array and value
// loop through array and check if current element is equal to the value
// if it is, return index that its found. if never found, return -1 

const linearSearch = (arr, val) => {
  let result = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      result = i
    }
  }

  return result
}

console.log(linearSearch([1, 2, 3], 3)) // 2
console.log(linearSearch([1, 2, 3], 4)) // -1 