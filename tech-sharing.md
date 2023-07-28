# Tech Sharking: Algorithms and Data Structures

## Big O

![big O graph](./bigO-graph.png)

- We want our code to be faster, less memory-intensive will still being readable
- big O allows us to talk about how the runtime of an algorithm grows as the inputs grow


Big O from fastest to slowest, with examples:
- O(1) => when inputs scale, the runtime remains constant 
````js
function addTwo(n) {
  return n + 2
}
````
- O(log n)
- O(n) => when the inputs scale, the runtime scales linearly with it
````js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += 1;
  }
  return total;
}
````
- O(n log n) 
- O(n²) => when the inputs scale, the runtime squares 
````js
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
````

- When we think about the Big O of a function: 
  - We are focused on the general trend over time 
  - We can consider from the above
    - arithmetic operations are constant. Adding, dividing, subtracting, etc, all O(1)
    - Accessing elements in an array by index or object by key is constant, O(1)
    - if we use a loop to iterate over an object it is O(n) 
    - if we use a loop inside a loop, it is O(n²), if we loop inside that loop the power grows etc. 
    - O(log n) is better than O(n) => logarithm is the inverse of exponentiation. Certain searching / sorting / recursion algorithms involve logarithmic complexity

## Problem Solving approach

When solving algorithm problems we need to devise a plan and master common problem solving patterns. 

Steps:
1. Understand the problem
  - can you restate the problem in your own words?
  - understand inputs and outputs required
  - how should you label important pieces of data?
````js
// Write a function, charCount, which takes in a string and returns an object with the count of each character in the string, i.e. { h: 1, i: 1}
````

2. Explore concrete examples
  - come up with a basic example or two with simple input and output
  - explore empty / invalid inputs

````js
charCount("aaaa") // {a:4}
charCount("hello") // {h:1, e: 1, l:2, o:1}
charCount("")
charCount(null) 
charCount()
````

3. Break it down - pseudo code
  - explicitly write out the steps you need to take 

````js
function charCount(str) {
  // make object to return at end 
  // lowercase all string
  // strip spaces and non numbers / letters

  // loop over string
    // check if character exists in object
    // if it is - add one to count
    // if not in object - add it and set value to one

  // return object at end 
}
````

4. Solve / simplify 
  - solve it or simplify:
    - find the core difficulty, ignore for now
    - write a simplified solution
    - incorporate difficulty back in

5. Refactor
  - can you check the result?
  - can you derive the result differently?
  - can you understand it at a glance?
  - can you improve the performance of your solution? 
    - as a general rule try to avoid nested loops!

## Problem Solving Patterns

There are common problem solving patterns which can help avoid nested loops. Some include:
- Frequency counter
  - Use objects or sets to collect values / frequencies of values
  - Avoids nested loops, usually O(n) time
  - i.e. a function that accepts two arrays and returns true if every value in the first array has its corresponding value squared in the second array
- Multiple pointers
  - Creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition
  - i.e. a function which accepts a sorted array of integers that finds the first pair where the sum of two integers is 0 and returns an array of these two integers. 
- Sliding window
  - creating a window which can either be an array or number from one position to another
  - depending on a certain condition, the window either increases or closes (and a new window is created)
  - very useful for keeping track of a subset of data in an array/string etc 
  - i.e. a function that finds the longest sequence of unique characters, i.e. for "hellothere", "hel", "lother" => "lother" is longer.
- Divide and conquer 
  - dividing a data set into smaller chunks and then repeating a process with a subset of data 
  - this pattern can tremendously decrease time complexity
  - sorting algorithms cover this in-depth, i.e. quick sort / merge sort are examples
  - often decreases solutions Big O to logarithmic counterparts
  - e.g. given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located


## Recursion

## Searching Algorithms

## Sorting Algorithms 

## Data structures