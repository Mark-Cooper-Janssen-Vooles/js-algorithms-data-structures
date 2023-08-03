// bubblesort 

// start looping with a variable called i. at the end of the array, towards the beginning 
// start an inner loop with a variable called j from the beginning until i - 1
// if arr[j] is greater than arr[j+1], swap those two values 
// return sorted array

function swap(arr, index1, index2) {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

// const bubbleSort = (arr) => {
//   for (let i = arr.length - 1; i > -1; i--) {
//     // loop over arr arr.length times
//     for (let j = 0; j < i; j++) {
//       // loop over arr.length within loop
//       //console.log(arr[j], arr[j+1])
//       if (arr[j] > arr[j+1]) {
//         // swap them
//         swap(arr, j, j+1)
//       }
//     }
//   }

//   return arr
// }

// optimised version:
const bubbleSort = (arr) => {
  let noSwaps
  for (let i = arr.length - 1; i > -1; i--) {
    noSwaps = true
    // loop over arr arr.length times
    for (let j = 0; j < i; j++) {
      // loop over arr.length within loop
      console.log(arr, arr[j], arr[j+1])
      if (arr[j] > arr[j+1]) {
        // swap them
        swap(arr, j, j+1)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }

  return arr
}

// console.log(bubbleSort([1, 3, 5, 2]))
// console.log(bubbleSort([1, 99, 654, 29, 666, 3, 5, 2]))
// console.log(bubbleSort([1, 2, 3, 4, 5, 7, 6]))


// =======================================
 
// Selection Sort 

// store first element as the smallest value you've seen so far
// compare this item to the next item in the array until you find a smaller number
// if a smaller number is found, make that the new 'minimum' and continue until the end of the array
// if the 'minimum' is not the value (index) you initially began with, swap the two values 
// repeat this with the next element until the array is sorted 

const selectionSort = (arr) => {
  let smallestIndex = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      //console.log(arr, arr[smallestIndex], arr[j])
      if (arr[smallestIndex] > arr[j]) {
        smallestIndex = j
      }
    }

    if (arr[i] > arr[smallestIndex]) {
      // swap:
      let temp = arr[smallestIndex]
      arr[smallestIndex] = arr[i]
      arr[i] = temp
    } else {
    }

    smallestIndex = i + 1
  }

  return arr
}

//console.log(selectionSort([2, 78, 1, 22, 55, 3]))

// =======================================

// Insertion Sort

// start by picking the second element in the array
// now compare the second element with the one before it and swap if necessary 
// continue to the next element and if it is in the incorrect order, iterate through the sorted portion (ie the left side) to place the element in the correct place 
// repeact until the array is sorted 

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    // when i = 0
    if (i === 0) {
      if (arr[i] > arr[i+1]) {
        // swap:
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
      }
    }

    // when i >= 2, left sorted area is 2 or greater. i.e. 2, 78
    for (let j = i; j > -1; j--) {
      // compare j+1 with j, if larger swap, iterate down to 0th index
      if (arr[j] > arr[j+1]) {
        // swap:
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
}

console.log(insertionSort([2, 78, 1, 22, 55, 3])) // 1, 2, 3, 22, 55, 78

// ======================

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

//console.log(quickSort([4, 6, 9, 3, 2, 1, 5]))

