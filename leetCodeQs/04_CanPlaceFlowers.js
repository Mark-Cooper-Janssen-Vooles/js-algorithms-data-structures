var canPlaceFlowers = function(flowerbed, n) {
  // edge case of only one empty flowerbed:
  if (flowerbed[0] === 0 && flowerbed.length === 1 && n === 1) return true
  if (n === 0) return true 

  // edge case of the first flower bed being planted:
  if (flowerbed[0] === 0 && flowerbed[1] === 0) {
    flowerbed[0] = 1
    n--; 
  }

  let p1 = 0
  let p2 = 2

  //see if you can plant flower 
  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (n === 0) return true 

    // rolling flower beds: 
    if (flowerbed[p1] === 0 && flowerbed[p2] === 0 && flowerbed[i] === 0) {
      flowerbed[i] = 1
      n--;
    }

    p1++
    p2++
  }

  // edge case of the end flower being planted:
  if (flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0) {
    flowerbed[flowerbed.length - 1] = 1
    n--;
  }

  return n === 0 ? true : false
};

// console.log(canPlaceFlowers([1,2,0,0,1], 1)) // false
// console.log(canPlaceFlowers([1,0,0,0,1], 1)) // true
// console.log(canPlaceFlowers([1,0,0,0,1], 2)) // false
// console.log(canPlaceFlowers([1,0,0,0,0,1], 2)) // false
console.log(canPlaceFlowers([1,0,0,0,1,0,0], 2)) // true