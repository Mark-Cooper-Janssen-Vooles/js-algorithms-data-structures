// power
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

const power = (base, exponent) => {
  let result = 1

  const helper = (exponent) => {
    if (exponent === 0) {
      return 1
    }
    result = result * base
    exponent--
    helper(exponent)
  }

  helper(exponent)

  return result
}

// console.log(power(2,0))
// console.log(power(2,2))
// console.log(power(2,4))


// =================

