// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


// performas badly, only beats 10% of users. but it passes all tests.
// var productExceptSelf = function(nums) {
//     const productArr = []
//     let currentIndex = 0;

//     const recursivelyAdd = (currentIndex) => {
//       if (currentIndex === nums.length) return;

//       let product = 1
//       for (let i = 0; i < nums.length; i++) {
//         if (currentIndex !== i) {
//           product = product * nums[i]
//         }
//       }
//       productArr.push(product)
//       currentIndex++
//       recursivelyAdd(currentIndex)
//     }

//     recursivelyAdd(currentIndex)

//     return productArr
// };


// memory is better, but still only beats 10% of JS users. Its also a nested loop!
var productExceptSelf = function(nums) {
  const productArr = []
  let currentIndex = 0;

  while (currentIndex !== nums.length) {
    let product = 1
    for (let i = 0; i < nums.length; i++) {
      if (currentIndex !== i) {
        product = product * nums[i]
      }
    }
    productArr.push(product)
    currentIndex++
  }

  return productArr
};

console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])) // [0,0,9,0,0]