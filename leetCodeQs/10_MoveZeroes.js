// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// var moveZeroes = function(nums) {
//   let currentIndex = 0;
//   let zeroesMoved = 0;

//   while ((currentIndex + zeroesMoved) < nums.length) {
//     if (nums[currentIndex] === 0) {
//       nums.splice(currentIndex, 1)
//       nums.push(0)
  
//       zeroesMoved = zeroesMoved + 1
//     } else {
//       currentIndex = currentIndex + 1
//     }
    
//     // currentIndex = currentIndex + 1
//     // console.log(currentIndex, nums)
//   }

//   return nums
// };

var moveZeroes = function(nums) {
  let currentIndex = 0;
  const initialLength = nums.length;
  let zeroCount = 0;

  for (let i = 0; i < initialLength; i++) {
    if (nums[i] !== 0) {
      nums[currentIndex] = nums[i]
      currentIndex++
    } else {
      zeroCount++
    }
  }

  console.log(nums)

  for (let i = (nums.length - 1); i > ((nums.length - 1) - zeroCount); i-- ) {
    nums[i] = 0
  }

  return nums
};

// console.log(moveZeroes([0,1,0,3,12]))
// console.log(moveZeroes([0,0,1]))
console.log(moveZeroes([0,1,0,3,12])) // 1, 3, 12, 0, 0