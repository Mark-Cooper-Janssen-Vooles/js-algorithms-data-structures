// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowelIndexes = []
  const stringArr = Array.from(s)

  // save all vowels and its index in an object
  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase() // account for casing
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      let obj = {}
      obj[s[i]] = i
      vowelIndexes.push(obj)
    }
  }
  
  // iterate through each vowel index combo
  let endVowelIndex = vowelIndexes.length - 1
  for (let i = 0; i < (vowelIndexes.length / 2); i++) {
      const vowelToEnd = Object.keys(vowelIndexes[i])[0]
      const vowelToEndIndex = vowelIndexes[i][vowelToEnd]
      const vowelToStart = Object.keys(vowelIndexes[endVowelIndex])[0]
      const vowelToStartIndex = vowelIndexes[endVowelIndex][vowelToStart]

      stringArr[vowelToEndIndex] = vowelToStart
      stringArr[vowelToStartIndex] = vowelToEnd

      endVowelIndex--;
  }

  return stringArr.join('')
};

console.log(reverseVowels("aA")) // "uoimea"
// console.log(reverseVowels("ai")) // "uoimea"
//console.log(reverseVowels("aeimou")) // "uoimea"
// console.log(reverseVowels("hello")) // "holle"
//console.log(reverseVowels("leetcode")) // "leotcede"
