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

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false