// write a function called `sumZero` which accepts a sorted array of integers. the function should find the first pair where the sum is 0. return an array that includes both values that sum to zero or undefined if a pair does not exist 
const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const arrNum = arr[i];
  
    for (let j = arr.length - 1; j >= arr.length - 1; j--) {
      const revNum = arr[j];
      const sameIndex = i === j;

      if ((arrNum + revNum === 0) && !sameIndex) {
        return [arrNum, revNum]
      }
    }
  }
}

//console.log(sumZero([-3, -2, 0, 2, 3]))
//console.log(sumZero([1, 2, 3]))


// Refactor using multiple pointers pattern: 
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

//console.log(sumZero2([-8, -3, -2, 0, 2, 3, 10]))


// ==============


// CHALLENGE: Count Unique Values 
// it accepts a sorted array, and counts the unique values in that array
// there can be negative numbers in the array, but it will always be sorted

// my attempt:
const countUniqueValues = (arr) => {
  // create an obj
  const obj = {}
  // loop through array, if key of arr value doesn't exist in obj add it
  arr.forEach((num) => {
    obj.hasOwnProperty(obj[num]) ? obj[num] = obj[num] + 1 : obj[num] = 1
  })
  // get number of keys in obj and return it
  const objLength = Object.keys(obj).length;
  return objLength
}

//console.log(countUniqueValues([1, 1, 2])); // 2 

const countUniqueValues2 = (arr) => {
  if (arr.length === 0) return 0
  // check if arr length is less than 3, if so, compare them 
  if (arr.length < 3) {
    if (arr[0] == arr[1]) return 1
    return 2
  }

  // if it is, use pointers and modify existing arr:
  let point1 = 0;
  let point2 = 1;

  while (point1 < arr.length - 1) {
    // if the same, remove the second one
    if (arr[point1] === arr[point2]) {
      arr.splice(point2, 1)
    } 
    // if not the same, increment both
    else {
      point1++
      point2++
    }
  }

  console.log(arr)
  return arr.length
}


//console.log(countUniqueValues2([1, 1, 2, 3]))
//console.log(countUniqueValues2([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]))
console.log(countUniqueValues2([]))
console.log(countUniqueValues2([-2, -1, -1, 0, 1]))