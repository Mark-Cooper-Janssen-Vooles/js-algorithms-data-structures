// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// const maxVowels = (s, k) => {
//   const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
//   let p1 = { index: 0, vowel: vowels.has(s[0])}
//   let p2 = { index: k - 1, vowel: vowels.has(s[k-1])}

//   let maxVowels = 0;
//   for(let i = p1.index; i < k; i++) {
//     // if char is a vowel, add it to maxVowels
//     if (vowels.has(s[i])) {
//       maxVowels++
//     }
//   }

//   let currentVowels = maxVowels

//   for(let i = p1.index; i < s.length; i++) {
//     const prevP1 = {...p1}
//     const prevP2 = {...p2}

//     p1 = { index: prevP1.index + 1, vowel: vowels.has(s[prevP1.index + 1])}
//     p2 = { index: prevP2.index + 1, vowel: vowels.has(s[prevP2.index + 1])}

//     if (prevP1.vowel) {
//       currentVowels--
//     }
//     if (p2.vowel) {
//       currentVowels++
//     }
//     if (currentVowels > maxVowels) {
//       maxVowels = currentVowels
//     }
//   }

//   return maxVowels
// }


const maxVowels = (s, k) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let maxVowels = 0;
  let currentVowels = 0;

  // Count vowels in the first window of size k
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      currentVowels++;
    }
  }

  maxVowels = currentVowels;

  // Slide the window through the rest of the string
  for (let i = k; i < s.length; i++) {
    // Remove the vowel count going out of the window
    if (vowels.has(s[i - k])) {
      currentVowels--;
    }

    // Add the vowel count of coming into the window
    if (vowels.has(s[i])) {
      currentVowels++;
    }

    // Update maxVowels if necessary
    if (currentVowels > maxVowels) {
      maxVowels = currentVowels;
    }
  }

  return maxVowels;
};

console.log(maxVowels('avciiidef', 3)) // 3

console.log(maxVowels('aeiou', 2)) // 2

console.log(maxVowels('leetcode', 3)) // 2