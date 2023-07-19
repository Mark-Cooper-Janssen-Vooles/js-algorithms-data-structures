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

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'

//====================

