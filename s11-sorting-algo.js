// quick sort 

// - move all numbers lower than that element to the left of that element, and all the numbers greater than that element to the right of that element.
// - not sort them all, just move them to the correct side. 
// - we know the pivot number is in the correct index - but we're unsure about everything else 
// - once we know the pivot is positioned correctly, quick sort can be applied on either side of the pivot. 
// - do the above and do it in place (do not create a new array)
// - when complete, the helper should return the index of the pivot


// Pivot Pseudocode:
// grab the pivot point from the start of the array
// store the current pivot index in a variable 
// loop through the array from start until end 
  // if the pivot is greater than the current element, increment the pivot index variable and swap the current element with the element at the pivot index 
// swap the starting element (the pivot) with the pivot index 
// return the pivot index

let arr = [ 5, 2, 1, 8, 4, 7, 6, 3]

const pivotHelper = (arr, startIndex = 0, endIndex = arr.length - 1) => {
  const pivot = arr[startIndex]
  let pivotIndex = startIndex

  for (let i = startIndex + 1; i < arr.length; i++) {
    //console.log(i, pivot, arr[i], pivot > arr[i])
    if (pivot > arr[i]) {
      pivotIndex++
      // everything smaller than pivot moves left of pivot:
      const itemRemovedArr = arr.splice(i, 1)
      arr.splice(pivotIndex, 0, ...itemRemovedArr)
    }
  }

  // move pivot into correct position:
  const pivotItemArr = arr.splice(startIndex, 1)
  arr.splice(pivotIndex, 0, ...pivotItemArr)

  return pivotIndex
}

// console.log(arr)
// console.log(pivotHelper(arr)) //4
// console.log(arr)

// - Quick sort Pseudocode
//   - calls the pivot helper on the array, gets the index back
//   - when the helper returns the updated pivot index, we recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
//   - your base case occurs when the subarray has less than two elements

// const quickSort = (arr, left = 0, right = arr.length - 1) => {
//   if (left < right) {
//     let pivotIndex = pivotHelper(arr, left, right) 
//     // left => this fires off into its own callstack
//     quickSort(arr, left, pivotIndex - 1) // as this runs, it recursively calls this function with a smaller subArray (the left and right get smaller) 
//     // right => called after left resolves
//     quickSort(arr, pivotIndex + 1, right)
//   }

//   return arr
// }

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  console.log(arr)
  if (left < right) {
    let pivotIndex = pivotHelper(arr, left, right) 
    console.log(pivotIndex)
    // left => this fires off into its own callstack
    quickSort(arr, left, pivotIndex - 1) // as this runs, it recursively calls this function with a smaller subArray (the left and right get smaller) 
    // right => called after left resolves
    quickSort(arr, pivotIndex + 1, right)
  }

  return arr
}

console.log(quickSort([4, 6, 9, 3, 2, 1, 5]))

