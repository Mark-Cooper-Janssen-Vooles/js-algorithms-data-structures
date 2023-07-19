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


//productOfArray
//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

const productOfArray = (arr) => {
  let sum = 1

  const helper = (value) => {
    if (value.length === 0) {
      return
    }

    sum = sum * value[0]
    helper(value.slice(1))
  }
  helper(arr)

  return sum
}

// console.log(productOfArray([1,2,3])) // 6
// console.log(productOfArray([1,2,3,10])) // 60

//========================

// recursiveRange
// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

const recursiveRange = (num) => {
  if (num <= 0) {
    return 0
  }

  let sum = 0
  const helper = (value) => {
    if (value === 0) {
      return
    }
    sum = sum + value
    helper(value - 1)
  }
  helper(num)

  return sum
}

// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55 

//======================

// fib
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

const fib = (num) => {
  if (num === 1 || num === 2) return 1
  let prevSum = 1
  let currentSum = 1;

  const helper = (val) => {
    if (val === 0) return
    const tempCurrent = currentSum
    currentSum = prevSum + currentSum

    prevSum = tempCurrent
    helper(val - 1)
  }
  helper(num - 2) // -2 cos 1 and 2 already accounted for

  return currentSum
}

// console.log(fib(4)) // 3
// console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465