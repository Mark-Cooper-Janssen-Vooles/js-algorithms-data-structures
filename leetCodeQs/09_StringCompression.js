// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

// var compress = function(chars) {
//   let s = chars[0]
//   let currentChar = chars[0]
//   // const newArr = [chars[0]]
//   let i = 1
//   let length = 1

//   while (i < chars.length + 1) {
//     if (length > 9) { // if length is greater than 9, push and set back to 0
//       // newArr.push(1)
//       s += '1'
//       length = 0
//     }

//     if (chars[i] === currentChar) {
//       length++
//     } else {
//       if (length > 1) { // less than 9, simply push
//         // newArr.push(length)
//         s += length.toString()
//       }
     
//       currentChar = chars[i]
//       length = 1
//       if (currentChar !== undefined) {
//         // newArr.push(currentChar)
//         s += currentChar
//       }
//     }
//     i++
//   }

//   console.log('s here:', s)
//   console.log(chars)

//   chars = []

//   for (let i = 0; i < s.length; i++) {
//     // chars.pop()
//     chars.push(s.charAt(i))
//     // console.log(s.charAt(i))
//   }

//   console.log(chars)

//   return s.length
// };

var compress = function(chars) {
  let currentChar = chars[0]
  let i = 1
  let length = 1

  const startLength = chars.length

  while (i < startLength) {
    if (chars[i] === currentChar) {
      length++
      chars.splice(i, 1) // remove char from nums
      i--
    } else {
      if (length > 1) { // less than 9, simply push
        if (chars[i-2] === '1') { // if previous char is 1, remove 
          console.log()
          chars.splice(i - 1, 1)
        }
        chars.splice(i, 0, length)
      }
      currentChar = chars[i]
      length = 1
      if (currentChar !== undefined) {
        chars.splice(i, 0)
      }

      if (currentChar === undefined && chars[i] === undefined) break
    }
    i++
    console.log('end', chars)
  }

  for(let i = 0; i < chars.length; i++) {
    console.log('i:', i, chars)
    if (typeof chars[i] === 'number') {
      const numString = chars[i].toString()
      console.log(chars[i], numString.length)

      if (numString.length > 1) {
        for(let j = 0; j < numString.length; j++) {
          chars.splice(i, 0, numString.charAt(j))
          i++
        }
        chars.splice(i, 1)
      } else {
        chars.splice(i, 1, numString)
      }
    }
  }

  return chars.length
};

// console.log(compress(["a","a","b","b","c","c","c"]))
// console.log(compress(["a"]))
// console.log(compress(["a","a","b","b","c","c","c"]))

// console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]))

console.log(compress(["a","a","a","a","a","a","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","c","c","c","c","c","c","c","c","c","c","c","c","c","c"]))
// 