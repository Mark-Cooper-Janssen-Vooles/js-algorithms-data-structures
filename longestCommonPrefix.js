var longestCommonPrefix = function(strs) {
  if (strs.length === 1) return strs[0]

  let lengthOfArrays = []
  strs.forEach((array) => {
    lengthOfArrays.push(array.length)
  })

  let smallestLengthIndex = 0 //arbitrarily assign 0th index
  lengthOfArrays.forEach((array, index) => {
    if (lengthOfArrays[smallestLengthIndex] > array) {
      smallestLengthIndex = index
    }
  })

  const smallestArrLength = lengthOfArrays[smallestLengthIndex]
  const smallestArr = strs[smallestLengthIndex]
  strs.splice(smallestLengthIndex, 1) // remove smallestArr

  let longestCommonPrefixArr = []

  // recursively call, removing the arr afterwards.
  const recursiveHelper = (arr) => {
    if (arr.length === 0) return
    const comparisonArr = strs[0]
    let comparisonStr = ''

    // if they're the same, add character
    for (let i = 0; i < smallestArrLength; i++) {
      if (smallestArr[i] === comparisonArr[i]) {
        comparisonStr += smallestArr[i]
      } else {
        break
      }
    }

    longestCommonPrefixArr.push(comparisonStr) // push result
    strs.splice(0, 1) // remove arr

    recursiveHelper(arr) // recursion
  }

  recursiveHelper(strs)

  let longestCommonPrefixIndex = 0
  for (let i = 0; i < longestCommonPrefixArr.length; i++) {
    if (longestCommonPrefixArr[longestCommonPrefixIndex].length > longestCommonPrefixArr[i].length) {
      longestCommonPrefixIndex = i
    }
  }
  
  return longestCommonPrefixArr[longestCommonPrefixIndex]
}

// console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
// console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
// console.log(longestCommonPrefix(["flower", "flow", "flowers"])) // "flow"
//console.log(longestCommonPrefix([""])) 
console.log(longestCommonPrefix(["cir","car"]))