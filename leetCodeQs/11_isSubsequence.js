// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

function isSubsequence(s, t) {
  if (t.length === 0 && s.length === 0) return true
  let p1 = 0

  for (let i = 0; i < t.length; i++) {
    if (s[p1] === t[i]) {
      p1++
    }
    if (p1 === s.length) return true 
  }

  return false
}

console.log(isSubsequence('abc', 'ahbgdc'))
console.log(isSubsequence('axc', 'ahbgdc'))

