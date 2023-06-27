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
// console.log(countUniqueValues2([]))
// console.log(countUniqueValues2([-2, -1, -1, 0, 1]))

// =============


// challenge: averagePair
// write a function called averagePair. given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. there may be more than one pair that matches the average target.

const averagePair = (arr, avg) => {
  let p1 = 0
  let p2 = 1

  while (p1 < arr.length) {
    const currentAvg = (arr[p1] + arr[p2]) / 2
    if (currentAvg !== avg ) {
      // increment p2 unless p2 its at the end 
      if (p2 < arr.length) {
        p2++
      } else {
        //increment p1 and reset p2 to p1+1
        p1++
        p2 = p1 + 1
      }
    }

    if (currentAvg === avg) return true
  }

  return false
}

//console.log(averagePair([1,2,3],2.5)) // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
// console.log(averagePair([],4)) // false

// ==========


// challenge: isSubsequence 
// write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. in other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing 

const isSubsequence = (s1, s2) => {
  let p1 = 0
  let p2 = 0
  let charMatching = 0;

  while (p2 < s2.length + 1) {
    if (s1[p1] === s2[p2]) {
      charMatching++
      if (charMatching === s1.length) {
        return true
      }
      // increment them both if theres a match
      p1++
      p2++
    } else {
      // increment only p2 if no match
      p2++
    }
  }

  return false
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)