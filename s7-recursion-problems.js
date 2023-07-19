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

// factorial
// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

const factorial = (num) => {
    if (num === 0) return 1 
    if (num === 1) {
      return num
    }

    let result = num

    const helper = (input) => {
      if (input === 1) {
        return 
      }
      result = result * input
      helper(input - 1)
    }
    helper(num - 1)

    return result
}

// console.log(factorial(1)) // 1
// console.log(factorial(2)) // 2
// console.log(factorial(4)) // 24
// console.log(factorial(7)) // 5040

// ==================