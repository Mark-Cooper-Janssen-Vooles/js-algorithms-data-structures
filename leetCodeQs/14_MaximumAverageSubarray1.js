// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

const findMaxAverage = (nums, k) => {
  let start = 0
  let end = k

  let startingVal = 0
  for(let i = start; i < end; i++) {
    startingVal += nums[i]
  }

  console.log('starting val:', startingVal)

  const startingAvg = startingVal / k
  
  let largestAvg = startingAvg
  console.log('starting avg:', largestAvg)

  let movingVal = startingVal
  while (end < nums.length + 1) {
    // subtract starting number
    movingVal -= nums[start]
    // add end number
    movingVal += nums[end]
    // set new largest avg if approrpiate
    const currentAvg = movingVal / k
    if (largestAvg < movingVal / k) {
      largestAvg = currentAvg
    }
    // increment window
    start++
    end++
  }

  return largestAvg
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)) // expect 12.75
// first run: 1 + 12 - 5 - 6 = 2
// second run: 2 - (1) + 50 = 51