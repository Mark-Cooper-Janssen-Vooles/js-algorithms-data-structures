function countDown(num) {
  if (num <= 0) {
    console.log('all done')
    return
  }
  console.log(num)
  num--
  countDown(num)
}

//countDown(5)

function countDownIteration(num) {
  for (var i = num; i>0; i--) {
    console.log(i)
  }
  console.log('all done')
}

//countDownIteration(5)

// ======================================================

function sumRange(num) {
  console.log(num)
  if (num === 1) return 1
  return num + sumRange(num-1)
}

// sumRange(5)

// =====================================

// factorial: 4! is equal to 4 * 3 * 2 * 1

function factorialIteratively(num) {
  let total = 1
  for (let i = num; i > 0; i--) {
    total *= i
  }
  return total
}

//console.log(factorialIteratively(3))

function factorialRecursive(num) {
  // base case 
  if (num === 1) return 1 // final call, factorialRecursive is not called again.
  // when to recurse
  return num * factorialRecursive(num - 1)
}

//console.log(factorialRecursive(3))

//===========

// helper method recursion 


function collectOddValuesHelper(arr) {
  let result = []

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    // if num is odd, add to result
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }
  helper(arr)

  return result;
}

//console.log(collectOddValuesHelper([1, 2, 3, 4]))

// ===================

// pure recursion 

function collectOddValuesPure(arr) {
  let newArr = []

  if (arr.length === 0) return newArr

  if (arr[0] % 2 !== 0){ // if num is odd, add to newArr
    newArr.push(arr[0])
  }

  // this goes through and returns the array 
  newArr = newArr.concat(collectOddValuesPure(arr.slice(1)))
  return newArr
}

console.log(collectOddValuesPure([1, 2, 3, 4]))
