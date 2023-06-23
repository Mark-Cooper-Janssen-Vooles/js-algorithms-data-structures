// naive solution, nested loops, O(n^2):
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2) // this is another loop. so O(n^2)
    if (correctIndex === -1) {
      return false
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}

const result = same([1, 2, 3, 2], [9, 1, 4, 4])
//console.log(result)


// refactored using frequency counter pattern
function same2(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)

  for(let key in frequencyCounter1){
      if(!(key ** 2 in frequencyCounter2)){
          return false
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
          return false
      }
  }
  return true
}

// const result2 = same2([1, 2, 3, 2], [9, 1, 4, 4])
// console.log(result2)


// ======================

// CHALLENGE: Anagrams
// given two strings, write a function to determine if the second string is an anagram of the first.
// an anagram is a word or phrase formed by rearranging the letters of another 
// e.g. cinema can be formed from iceman

const validAnaragram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }
  const obj1 = {}
  const obj2 = {}
  for(let index in str1) {
    const char = str1[index]
    obj1.hasOwnProperty(char) ? obj1[char] = obj1[char] + 1 : obj1[char] = 1
  }
  for(let index in str2) {
    const char = str2[index]
    obj2.hasOwnProperty(char) ? obj2[char] = obj2[char] + 1 : obj2[char] = 1
  }
  console.log(obj1)
  console.log(obj2)

  for(const key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      if (obj2[key] !== obj1[key]) {
        return false
      }
    } else {
      return false
    }
  }

  return true;
}

// const result3 = validAnaragram('aaz', 'aza');
// console.log(result3)


// ====

// challenge: sameFrequency
// given two positive integers, find out if the two numbers have the same frequency of digits 

// sameFrequency(182, 281) // true 
// sameFrequency(31, 14) //false

const sameFrequency = (num1, num2) => {
  // create obj1 and obj2
  const obj1 = {}
  const obj2 = {}
  
  //loop through both nums seperately
  const num1s = num1.toString()
  for (let i = 0; i < num1s.length ; i++ ) {
    // add to obj if key doesn't exist as value 1 
    // increment value if it does exist
    obj1[num1s[i]] ? obj1[num1s[i]]++ : obj1[num1s[i]] = 1
  }

  const num2s = num2.toString()
  for (let i = 0; i < num2s.length ; i++ ) {
    obj2[num2s[i]] ? obj2[num2s[i]]++ : obj2[num2s[i]] = 1
  }

  console.log(obj1)
  console.log(obj2)
  
  // look through keys and compare them 
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false 
    }
  }

  return true
}

//console.log(sameFrequency(182, 281)) // true 
// sameFrequency(31, 14) //false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

// =====


// challenge: areThereDuplicates
// implement a function areThereDuplicates which accepts a variable number of arguments