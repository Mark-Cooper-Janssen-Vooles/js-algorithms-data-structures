// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

var maxArea = function(height) {
  let p1 = 0
  let p2 = height.length - 1

  let maxArea = 0
  let currentHeight = 0

  while (p1 < (height.length - 1)) {
    // set current height 
    height[p1] > height[p2] ? currentHeight = height[p2] : currentHeight = height[p1]
    // set maxArea
    const tempMaxArea = currentHeight * (p2 - p1)
    if (tempMaxArea > maxArea) {
      maxArea = currentHeight * (p2 - p1)
    }
    // increment left only check 
    height[p1 + 1] > height[p2] ? currentHeight = height[p2] : currentHeight = height[p1 + 1]
    const tempMaxAreaLeft = currentHeight * (p2 - (p1 + 1))
    if (tempMaxAreaLeft > maxArea) {
      maxArea = currentHeight * (p2 - (p1 + 1))
    }
    // decrement right only check
    height[p1 ] > height[p2 - 1] ? currentHeight = height[p2 - 1] : currentHeight = height[p1]
    const tempMaxAreaRight = currentHeight * ((p2 - 1) - p1)
    if (tempMaxAreaRight > maxArea) {
      maxArea = currentHeight * ((p2 - 1) - p1)
    }
    // continue for next round 
    height[p1] > height[p2] ? p2-- : p1++
  }

  return maxArea
};

//console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// console.log(maxArea([2,3,10,5,7,8,9]))

console.log(maxArea([2,3,4,5,18,17,6]))