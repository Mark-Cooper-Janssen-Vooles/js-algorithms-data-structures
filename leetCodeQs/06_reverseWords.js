// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// var reverseWords = function(s) {
//   const arr = s.trim().split(' ')
//   let str = ''

//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] !== "") {
//       str += `${arr[i]} `
//     }
//   }

//   return str.trim()
// };

var reverseWords = function(s) {
  // remove whitespace
  const charArr = s.trim().split('')
  let endP = s.length - 1

  console.log(charArr)

  for (let i = 0; i < (s.length / 2); i++) {
    if (charArr[i] === ' ' && charArr[i+1] === ' ') {
      // do nothing (strip out white)
      s.replace(' ', '')
    } else {
      const existingChar = charArr[i]
      const newChar = charArr[endP]
      charArr[i] = newChar
      charArr[endP] = existingChar
    }
  }

  console.log(charArr.join(''))
  return s
};



// console.log(reverseWords("the sky is blue")) //"blue is sky the"
// console.log(reverseWords("  hello world  ")) //"world hello"
console.log(reverseWords("a good   example")) //"example good a"