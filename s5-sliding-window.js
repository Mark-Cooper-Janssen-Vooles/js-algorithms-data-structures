// naive solution O(n^2)
function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// console.log(maxSubarraySum([1, 2, 3], 2)) // 5
// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3)) // 19


// better solution using sliding window:
function maxSubarraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = num; i < arr.length; i++) {
    // console.log('maxsum:', maxSum)
    // console.log('i:', i)
    // console.log('arr[i]:', arr[i])
    maxSum += arr[i] // right-most starting point
  }

  //console.log(maxSum)

  tempSum = maxSum

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum
}

// console.log('answer:', maxSubarraySum2([1, 2, 3], 2));

const maxSubarraySum3 = (arr, num) => {
  let start = 0;
  let end = num;
  let maxWindow = 0;

  arr.forEach((num, index) => {
    console.log('iteration:', index + 1)
    const currentWindow = arr
      .slice(start, end)
      .reduce((acc, curr) => acc + curr, 0)

    console.log(maxWindow, currentWindow)
    if (maxWindow < currentWindow) {
      maxWindow = currentWindow
    }

    start++
    end++
  })

  return maxWindow;
}

console.log('answer:', maxSubarraySum3([1, 2, 3], 2)); // 5
console.log(maxSubarraySum3([2,6,9,2,1,8,5,6,3],3)) // 19

// for sliding window, the second argument is the "window" and we simply move it up the array each time, and if it is larger then we override 'maxSum'.