// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

const reverse = (str) => {
  let result = ''

  const helper = (val) => {
    if (val.length <= 0) return 

    const lastLetter = val.substring(val.length - 1)
    result = result + lastLetter
    const newVal = str.substring(0, val.length - 1)
    helper(newVal) 
  }
  helper(str)

  return result
}

// console.log(reverse('awesome')) // 'emosewa'
// console.log(reverse('rithmschool')) // 'loohcsmhtir'

//====================

// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

const isPalindrome = (str) => {
  let result = true

  const helper = (val) => {
    // if 0 length or 1 or false result, return 
    if (val.length === 0 || val.length === 1 || result === false) return
    // if 2 or more length, pop off ends of word, see if they match.
      // if no, result is false
      // if yes, result remains true 
    if (val.length > 2) {
      const firstLetter = val.substring(0, 1)
      const lastLetter = val.substring(val.length - 1)

      if (firstLetter !== lastLetter) {
        result = false
        return
      }

      const strRemaining = val.substring(1, val.length - 1)
      helper(strRemaining)
    } 
  }
  helper(str)

  return result
}

// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false

// ================


// someRecursive
// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

const someRecursive = (arr, callback) => {
  let result = false

  const helper = (val) => {
    // if arr length === 0, return 
    if (val.length === 0) return
    // pass value to callback
      // if true, set result to true and exit
      // if false, call helper again with first value removed
    if (callback(val[0]) === true) {
      result = true
      return
    }

    helper(val.slice(1))
  }
  helper(arr)

  return result
}

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false
