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

// console.log(linearSearch([1, 2, 3], 3)) // 2
// console.log(linearSearch([1, 2, 3], 4)) // -1 

// ==============

// binary search
// write a function that accepts a sorted array and a value, assume only numbers
// create a left pointer at the start of the array, and a right pointer at the end of the array 
// while the left pointer comes before the right pointer:
  // create a pointer in the middle 
  // if you find the value you want, return the index
  // if value is too small, move left pointer up
  // if value is too large. move right pointer down
  // if you never find the value, return -1 

const binarySearch = (arr, val) => {
  let leftP = 0
  let rightP = arr.length - 1

  while (leftP < rightP) {
    const midP = Math.ceil((rightP + leftP) / 2)
    if (arr[midP] === val) {
      return midP
    }

    if (arr[midP] < val) {
      leftP = midP
    }

    if (arr[midP] > val) {
      rightP = midP
    }
  }

  return -1
}

console.log(binarySearch([1, 2, 3], 3)) // 2
console.log(binarySearch([1, 2, 3], 4)) // -1 

console.log(binarySearch([1,2,3,4,5],2)) // 1
console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1