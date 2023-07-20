var mergeAlternately = function(word1, word2) {
  let newWord = ''
  let shortestLength

  word1.length < word2.length ? 
      shortestLength = word1.length : 
      shortestLength = word2.length

  for(i = 0; i < shortestLength; i++) {
      newWord += word1[i]
      newWord += word2[i]
  }

  if (word1.length < word2.length) // if word 1 is shorter
      newWord += word2.slice(shortestLength, word2.length)

  if (word1.length > word2.length)
    newWord += word1.slice(shortestLength, word1.length)

  return newWord
};

// console.log(mergeAlternately('ab', 'pqrs'))

//====================

// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

var reverseWords = function(s) {
  let result = ''
    const sArr = s.trim().split(' ').reverse()
    console.log(sArr)

    for (let i = 0; i < sArr.length; i++) {
      if (sArr[i] !== '') {
        if (i === 0) {
          result += `${sArr[i]}`
        } else {
          result += ` ${sArr[i]}`
        }
      }
    }

    return result
};

//console.log(reverseWords("a good   example"))


//============

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// var maxArea = function(height) {
//     let firstPointer = 0
//     let secondPointer = 1

//     let containerSize = 0

//     while (firstPointer < height.length - 1) {
//       const shorterSide = height[firstPointer] > height[secondPointer] ?  
//       height[secondPointer] : height [firstPointer]
//       console.log('shorterside:', shorterSide)
//       const xAxis = (secondPointer - firstPointer)
//       console.log('xaxis', xAxis)
//       const containerSizeTemp = shorterSide * xAxis
//       console.log('containerSizeTemp', containerSizeTemp)

//       if (containerSizeTemp > containerSize) { // new bigger container size
//         containerSize = containerSizeTemp
//       }

//       console.log('containerSize', containerSize)

//       // what rules govern if we increment firstpointer, second pointer, or both?
//       if (secondPointer < height.length - 1 ) {
//         secondPointer++
//       } else {
//         firstPointer++
//         secondPointer = firstPointer + 1
//       }
//     }

//     return containerSize
// };

// //console.log(maxArea([1,8,6,2,5,4,8,3,7]))

// //console.log(maxArea([1,2]))

var maxArea = function(height) {
  let firstPointer = 0
  let secondPointer = height.length - 1

  let containerSize = 0

  while (firstPointer < height.length - 1) {
    const shorterSide = height[firstPointer] > height[secondPointer] ?  
    height[secondPointer] : height [firstPointer]
    console.log('shorterside:', shorterSide)
    const xAxis = (secondPointer - firstPointer)
    console.log('xaxis', xAxis)
    const containerSizeTemp = shorterSide * xAxis
    console.log('containerSizeTemp', containerSizeTemp)

    if (containerSizeTemp > containerSize) { // new bigger container size
      containerSize = containerSizeTemp
    }

    console.log('containerSize', containerSize)

    // what rules govern if we increment firstpointer, second pointer, or both?
    if (secondPointer < height.length - 1 ) {
      secondPointer++
    } else {
      firstPointer++
      secondPointer = firstPointer + 1
    }
  }

  return containerSize
};

//console.log(maxArea([1,8,6,2,5,4,8,3,7]))

//console.log(maxArea([1,2]))

//==============

// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

var findMaxAverage = function(nums, k) {
  let start = 0
  let end = k

  let largestVal

  while (end < nums.length + 1) {
      const tempNums = nums.slice(start, end)
      const tempVal = tempNums.reduce((partialSum, a) => partialSum + a, 0)

      if (largestVal === undefined || tempVal > largestVal) {
          largestVal = tempVal
      }
      start++
      end++
  }

  return largestVal / k
};

//===================

// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

var maxVowels = function(s, k) {
    let p1 = 0
    let p2 = k

    let result = 0

    while ( p2 < s.length + 1) {
      const tempS = s.slice(p1, p2)
      const tempCount = tempS.match(/[aeiou]/gi)?.length

      if (tempCount > result) {
        result = tempCount
      }
      p1++
      p2++
    }

    return result
};

console.log(maxVowels('leetcode', 3)) // 2