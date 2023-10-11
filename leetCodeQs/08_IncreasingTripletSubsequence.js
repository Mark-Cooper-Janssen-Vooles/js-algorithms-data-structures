// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// var increasingTriplet = function(nums) {
//   if (nums.length < 3) {
//     return false
//   }
//   let p1 = 0
//   let p2 = 1
//   let p3 = 2

//   while (true) {
//     // console.log(nums[p1], nums[p2], nums [p3])
//     if (nums[p1] < nums[p2] && nums[p2] < nums [p3]) {
//       return true
//     } else if (nums[p1] < nums[p2] && nums[p2] >= nums[p3]) {
//       // p1 and p2 satisfy, p2 and p3 do not - increment p3
//       if (p3 < nums.length - 1) {
//         // keep incrementing p3 to see if there is a p3 higher than p2
//         p3++
//         continue
//       } else {
//         // no p3 satisfies, increase p2, reset p3
//         if (p2 < nums.length - 2) {
//           p2++ 
//           p3 = p2 + 1
//           continue
//         } 
//         if (p1 < nums.length - 3) {
//           p1++
//           p2 = p1 + 1
//           p3 = p2 + 1
//           continue
//         }
//       }
//     } else if (nums[p1] >= nums[p2]) {
//       // p1 and p2 do not satisfy - increment p2 and p3
//       if (p3 < nums.length - 1) {
//         // keep incrementing p2 to see if p1 and p2 can satisfy
//         p2++
//         p3++
//         continue
//       } else {
//         // no p2 satisfies, increase p1, reset p2 / p3
//         if (p1 < nums.length - 3) {
//           p1++
//           p2 = p1+1
//           p3 = p2+1
//           continue
//         }
//       }
//     }

//     if (p1 === nums.length - 3) return false
//   }
// };

var increasingTriplet = (nums) => {
  if (nums.length < 3) {
    return false
  }

  let p1 = 0
  let p2 = 1

  for (let i = 2; i < nums.length + 2; i++) { // i starts at 2, aka p3
    console.log(p1, p2, i)
    console.log(nums[p1], nums[p2], nums[i])
    if (nums[p1] < nums[p2] && nums[p2] < nums[i]) return true

    // p1 should always be the lowest number, otherwise store current as lowest
    if (nums[p1] < nums[i]) { 
      p2 = i // it is lower, so update p2
    } else {
      p1 = i
    }
  }

  return false
}

// [1, 2, 2, 1]
//  0     1  2        


console.log(increasingTriplet([5,1,5,5,2,5,4])) // true

// console.log(increasingTriplet([1,2,3,4,5])) // true
// console.log(increasingTriplet([5,4,3,2,1])) // false
// console.log(increasingTriplet([2,1,5,0,4,6])) // true
// console.log(increasingTriplet([20,100,10,12,5,13])) // true

// console.log(increasingTriplet([0,4,2,1,0,-1,-3])) // false

// console.log(increasingTriplet([1, 2, 2, 1])) // false

// console.log(increasingTriplet([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100000000]))