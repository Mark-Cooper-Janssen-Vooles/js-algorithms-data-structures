// if str2 repeats itself, how many times? 
const repetitions = (str) => {
  let strRepeatCount = 0
  let strWord = ''
  let strWordP = 0
  for (let i = 0; i < str.length; i++) {
    //console.log(str2[i], str2[0])
    if (i !== 0 && str[i] === str[0]) {
      // check for repeat, i.e. index 5
      //console.log('potential repeat at:', i, str2word)
      repeat = true

      for (let j = i; j < i + strWord.length; j++) {
        console.log('hmm', str[j], strWord[strWordP], str[j] === strWord[strWordP])

        if (str[j] === strWord[strWordP]) {
          strWordP++
          //console.log('yikes:', j - str2word.length - (str2word.length * str2repeatCount), str2word.length - 1)
          if (j - strWord.length - (strWord.length * strRepeatCount) === strWord.length - 1) {
            strRepeatCount++
            //console.log("repeat count:", str2repeatCount)
            strWordP = 0
          }
        } 
        else {
          repeat = false 
          strWordP = 0
          return 
        }
      }
    } else {
      if (strRepeatCount === 0) {
        strWord += str[i]
      }
    }
  }

  return { repeatCount: parseInt(strRepeatCount + 1), word: strWord } 
}

var gcdOfStrings = function(str1, str2) {
  // make sure str is the shorter string:
  if (str1.length < str2.length) {
    const str1Temp = str1
    str1 = str2 
    str2 = str1Temp
  }

  // make sure str2 is included in str1
  if (!str1.includes(str2)) return ""
  // make sure all characters in str2 exist in str1
  for (let i = 0; i < str1.length; i++) {
    if (!str2.includes(str1[i])) return ""
  }

  // does word repeat itself? how many times? 

  const repeatedTimesStr2 = repetitions(str2) // 5
  const repeatedTimesStr1 = repetitions(str1) // 9

  //console.log(repeatedTimesStr1.repeatCount, repeatedTimesStr2.repeatCount, repeatedTimesStr2.word, repeatedTimesStr1.word)
  //console.log(repeatedTimesStr1, repeatedTimesStr2)
  if (repeatedTimesStr1 === undefined || repeatedTimesStr2 === undefined) return ""
  if (repeatedTimesStr1.word !== repeatedTimesStr2.word) return ""
  // do the math
  // 0. if one is odd and the other even, divisibility is one and smallest word returned 
  if (repeatedTimesStr2.repeatCount % 2 !== 0 &&
    repeatedTimesStr1.repeatCount % 2 === 0 ||
    repeatedTimesStr2.repeatCount % 2 === 0 &&
    repeatedTimesStr1.repeatCount % 2 !== 0
    ) {
      // do something
      return repeatedTimesStr2.word
    }

  // 2. divisibility when both are even 
  if (repeatedTimesStr2.repeatCount % 2 === 0 &&
    repeatedTimesStr1.repeatCount % 2 === 0) {
      let word = repeatedTimesStr2.word
      let highestMultiply = 1
      let stillIncrease = true 

      while (stillIncrease) {
        const division = (repeatedTimesStr2.repeatCount * 2) / repeatedTimesStr1.repeatCount
        const wholeNumber = division - Math.floor(division) === 0

        if (wholeNumber && repeatedTimesStr2.repeatCount < repeatedTimesStr1.repeatCount) {
          repeatedTimesStr2.repeatCount = repeatedTimesStr2.repeatCount * 2
          highestMultiply++
          word += repeatedTimesStr2.word
        } else {
          stillIncrease = false
        }
      }

      return word
    }

  // 3. divisibility when both are odd 
  if (repeatedTimesStr2.repeatCount % 2 !== 0 &&
    repeatedTimesStr1.repeatCount % 2 !== 0) {
      let word = repeatedTimesStr2.word
      let highestMultiply = 1
      let stillIncrease = true 

      while (stillIncrease) {
        const division = (repeatedTimesStr2.repeatCount * 2) / repeatedTimesStr1.repeatCount
        const wholeNumber = division - Math.floor(division) === 0

        if (wholeNumber && repeatedTimesStr2.repeatCount < repeatedTimesStr1.repeatCount) {
          repeatedTimesStr2.repeatCount = repeatedTimesStr2.repeatCount * 2
          highestMultiply++
          word += repeatedTimesStr2.word
        } else {
          stillIncrease = false
        }
      }

      return word
    }
};

// console.log(gcdOfStrings("LEET", "CODE")) // ""
//console.log(gcdOfStrings("ABABAB", "ABAB")) // "AB"
//console.log(gcdOfStrings("ABCABC", "ABC")) // "ABC"
// console.log(gcdOfStrings('ABCDEF', 'ABC'))
//console.log(gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX","TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX")) // "TAUXX"
//console.log(gcdOfStrings("ABABABAB", "ABAB")) // "ABAB"
//console.log(gcdOfStrings("AAAAAAAAA", "AAACCC")) // ""
//console.log(gcdOfStrings("ABCABC", "ABC")) // "ABC"
//console.log(gcdOfStrings("ABCABCABC", "ABCAAA")) // "ABC"
//console.log(gcdOfStrings("AABB", "AB")) // ""
//console.log(gcdOfStrings("OBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNO", "OBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNO")) // ""
console.log(gcdOfStrings("OBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNO", "OBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNO"))

// ------------------------------------------------------------------------

  // // work out if string 2 is in string 1, and up to what index
  // let matchingIndex = 0
  // for (let i = 1; i < str2.length; i++) {
  //   if (str1[i] === str2[i]) {
  //     matchingIndex++
  //   }
  // }

  // //console.log('matching index', matchingIndex)
  // let highestRepeatingIndex = 0
  // let repeatingIndex = 0
  // for (let i = matchingIndex + 1; i < str1.length; i++) {
  //   //console.log(i, str1[i], str2[i - matchingIndex - 1])
  //   if (str1[i] === str2[i - matchingIndex - 1]) {
  //     //console.log(str1[i])
  //     repeatingIndex++
  //     if (highestRepeatingIndex < repeatingIndex) {
  //       highestRepeatingIndex = repeatingIndex
  //     }
  //   } else {
  //     repeatingIndex = 0
  //   }
  // }

  // //console.log('repeatingIndex', repeatingIndex)
  // //console.log('highestRepeatingIndex', highestRepeatingIndex)

  // let gcd = ''
  // for (let i = 0; i < highestRepeatingIndex; i++) {
  //   gcd += str2[i]
  // }

  // //console.log(gcd)

  // return gcd