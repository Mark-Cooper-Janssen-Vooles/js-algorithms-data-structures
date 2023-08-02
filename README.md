# JavaScript Algorithms and Data Structures

Have node installed and simply run each file, i.e.: `node <name-of-file>.js`

- [Section 2: Big O... O(n²)](#big-o-notation)
  - timing our code
  - official intro to big O
  - space complexity
  - logarithms
- [Section 3: Performance of Arrays and Objects](#analyzing-performance-of-arrays-and-objects)
  - the big O of objects 
  - when are arrays slow?
  - the big O of array methods
- [Section 4: Problem solving approach](#problem-solving-approach)
  - understand the problem 
  - use conctre examples
  - break it down
  - solve or simplify
  - look back and refactor
- [Section 5: Problem solving patterns](#problem-solving-patterns)
  - [Frequency Counters](#frequency-counters)
  - [Multiple Pointers](#multiple-pointers)
  - [Sliding window](#sliding-window-pattern)
  - [Divide and Conquer](#divide-and-conquer-pattern)
- Section 6: Optional challenges
- [Section 7: Recursion](#recursion)
  - [Helper Method Recursion](#helper-method-recursion)
  - [Pure Recursion](#pure-recursion)
  - Section 8: Recursion problems 
  - Section 9: Bonus challenging recursion problems
- [Section 10: Searching algorithms](#searching-algorithms) 
  - [Linear search](#linear-search)
  - [Binary search](#binary-search)
  - [Naive String Search](#naive-string-search)
- [Section 11: Sorting Algorithms](#sorting-algorithms)
  - [Built-in JS sort](#built-in-javascript-sort)
  - [Bubble Sort](#bubble-sort)
  - [Selection Sort](#selection-sort)
  - [Quick Sort](#quick-sort)
  <!-- - Bubble Sort => do this 
  - Section 12: Section sort => do this 
  - Section 13: Insertion sort => do this 
  - Section 14: Comparing above 3 sorts -->
  <!-- - Section 15: Merge sort (probs don't do)
  - Section 16: Quick sort (probs don't do)
  - Section 17: Radix sort (don't do) -->
- Section 18: Data structures intro (whats the best? where do they excel) => maybe don't do the rest? see how it goes after intro. 
  - Section 19: singly linked lists
  <!-- - Section 20: doubly linked lists (can skip this if we do singly linked) -->
  - Section 21: stacks + queues 
  - Section 22: Binary search trees 
  - Section 23: tree traversal 
  - Section 24: Binary heaps (similar to trees)
  - Section 25: Hash tables 
  - Section 26: Graphs 
  - Section 27: Graph traversal 
  - Section 28: Dijkstra's algorithm
  - Section 29: Dynamic programming 
  - Section 30: The wild west 

---

## Big O Notation

- Whats the need for big O notation?
  - if we have two valid solutions to a problem, some are "better" and run faster, and this can matter at scale
  - leetcode for example compares them for speed 

![big O graph](./bigO-graph.png)

#### Timing our code 
- We want code that is faster, less memory-intensive whilst still being readable. 
- How fast does code run? we can use built-in js timing functions, i.e. `performance.now();`
````js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += 1;
  }
  return total;
}

const t1 = performance.now();
addUpTo(1000000);
const t2 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`)
````
- for fast algorithms, speed measurements may not be precise enough - it may vary computer to computer etc. Thats where big O notation comes in. 

### Counting Operations 

- if not time, then we could count the number of simple operations the computer needs to perform 
- i.e. multiplication, addition, division are all 'operations' that need to be performed. 
  - `return n * (n + 1) / 2` has 3 operations 
  ````js
  function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += 1;
    }
      return total;
  }
  ```` 
  - the above code has `n` operations by comparison

### Perfomance tracking tool 

- https://rithmschool.github.io/function-timer-demo/


### Official intro to Big O

- big O is a way to formalize fuzzy counting
- allows us to talk about how the runtime of an algorithm grows as the inputs grow 
- we say that an algoritm is O(f(n)) is the number of simple operations the computer has to do is eventually less than a constant times f(n) as n increase 
  - f(n) could be linear, i.e. as n scales, the runtime scales 
  - f(n) could be quadratic where when n scales, the runtime squares 
  - f(n) could be constant (f(n) = 1), where when n scales the runtime remains a constant 
  - f(n) could be soemthing different


- Examples
- f(n) = 1:
````js
function addUpTo(n) {
  return n * (n + 1) / 2
}
````
- the above is O(1), as n changes, the runtime remains a constant 1. 

- f(n) = n
````js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += 1;
  }
  return total;
}
````
- the above is O(n). as n changes, the runtime grows with n.
- the number of operations is (eventually) bounded by a multiple of n.
  - doesn't matter if its 10n, 5n etc. 
  - we don't care, when we zoom out in a massive chart and we care in a "fuzzy" way - it looks the same 
  - so we just call it O(n) even if its 10n

- f(n) = n²
````js
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
````
- the above is O(n²), the runtime grows exponentially with n


### Simplifying Big O Expressions 

- Smaller terms / constants don't matter, we just want the general trend
  - O(2n) is simplified to O(n) => increase with n
  - O(500) is simplified to O(1) => doesn't increase with scale
  - O(13n ²) is simplified to O(n²) => increases at n ²
  - O(n ² + 5n + 8) => is simplified to O(n ²)
    - the 5n + 8 is insignificant if we zoom out to a large scale 

- Big O shorthands / rules of thumb:
  - arithmetic operations are constant. adding, dividing, subtracting are constant, i.e. O(1)
  - variable assignment is constant 
  - accessing elements in an array (by index) or object (by key) is constant 
  - in a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
    - i.e. if only constants happen in the loop, its O(n). but if another loop happens, its O(n ²)

![big O graph](./bigO-graph.png)

### Space complexity 

- "auxilary space complexity" refers to space required by the algorithm, not including the space taken up by the inputs
- Space complexity in JS rules of thumb:
  - most primitives (Bool, numbers, undefined, null) are constant space 
  - Strings require O(n) space (where n is the length of the string)
    - i.e. a 50 length string takes up 50x the length of a 1 length string 
  - Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)
````js
function sum(arr) {
  let total = 0; 
  for (let = 0; i <arr.length ; i++) {
    total += arr[i];
  }
  return total;
}
````
- we've got total = 0 and i = 0, so we've just got two items. the space complexity is just 2, simplified to O(1) space. 
````js
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i])
  }
  return newArr
}
````
- the above has an assignment of an array that grows depending on the variable, thus this reference type is O(n) - so O(n) space complexity 


### Logarithms 

- O(1), O(n), O(n²) are simple / common expressions
- sometimes we have more complex, i.e. O(log n). 
- A log is an inverse of exponentiation 
  - log2(8) = 3  ... says: log to the power of base 2 times 8 equals 3 
    - essentially asking: 2 to what power will give us 8? 2 x 2 x 2 = 8 (therefore the answer is 3)
      - 2 to the power of 3 = 8
    - log2 (value) = exponent ---> 2 to the power of exponent = value 
- because we care about the big picture, we'll just ignore the two and just write "log"
  - log === log base 2

- the logarithm of a number roughly measures the number of times you cna divide that number by 2 before you get a value thats less than or equal to one 
  - i.e. if our number is 8. we divide by 2, 4. divide by 2, 2. divide by 2, 1. so log(8) = 3

- logarithm complexity:
  - logarithm time complexity is great. O(log n) is only slightly more than O(1). better than O(n), O(nlog n) and O(n²).


- certain searching algorithms have log time complexity
- efficient sorting algorithms involve logs 
- recursion sometimes involves logarithmic space complexity

---

## Analyzing Performance of Arrays and Objects 

### The big O of objects 

- objects are unordered, key value pairs
- work well when you don't need order
- when you need fast access / insection / removal: 
  - insertion - O(1)
  - removal - O(1)
  - searching - O(n)
  - access - O(1)
- when you don't need ordering, objects are ideal! 

- big O of object methods:
  - Object.keys - O(n)
  - Object.values - O(n)
  - Object.entries - O(n)
  - hasOwnProperty - O(1)

### Arrays 

- arrays are an ordered list
- When to use:
  - when you need order
  - when you need fast access / insertion and removal (sort of...)
- big O of arrays:
  - insertion - it depends...
  - removal - it depends...
  - searching - O(n)
  - access - O(1)
- insertion:
  - if you add on to the end, its O(1) (i.e. `arr.push('test')`)
  - if you try to add it do the beginning of the array, everything needs to be re-indexed. therefore its O(n), i.e. `arr.shift()`
- removal:
  - same here - if we remove the first item in the array, everything needs to be re-indexed. thats O(n), i.e. `arr.unshift()`
  - removing from the end would be O(1) - i.e. `arr.pop('test')`


### Big O of Array methods 

- push - O(1)
- pop - O(1)
- shift - O(n)
- unshift - O(n)
- concat - O(n)
- slice - O(n)
- splice - O(n)
- sort - O(n log n) ...
  - => we talk about sorting algorithms later
  - the time it takes to sort an array is larger. we have to make comparisons and move things around
- forEach/map/filter/reduce/etc - O(n)


---

## Problem Solving Approach 

Algorithms and problem solving patterns 


- An algorithm is "a process or set of steps to accomplish a certain task"
- devise a plan for solving problems 
- master common problem solving patterns 
  - a lot of problems can be broken into categories 


Basic steps:
- understand the problem
- explore concrete examples
- break it down
- solve / simplify
- look back and refactor 

### Step 1: Understand the problem

- slow down and ask questions to fully understand it before you start typing code
1. can i restate the problem in my own words?
2. what are the inputs that go into the problem?
3. what are the outputs that should come from the solution to the problem?
4. can the outputs be determined from the inputs? in other words, do i have enough information to solve the problem? (you may not be able to answer until you set about solving the problem)
5. how should i label the important pieces of data that are a part of the problem?

### Step 2: Concrete Examples

- Coming up with examples can help you understand the problem better
  - examples also provide sanity checks that your eventual solution works how it should 

Steps:
1. write down 2 or so examples with very simple input and output 
2. progress to more complex examples
3. explore empty inputs
4. explore invalid inputs 

"Write a function which takes in a string and returns a count of each character in the string"
````js
// for 1: 
charCount("aaaa") // {a:4}
charCoubt("hello") // {h:1, e: 1, l:2, o:1}

// for 2: 
charCount("my phone number is 129819208") // are we going to allow numbers? what about @$#%#%^&@# characters?
charCount("hello HI") // dealing with uppercase

// for 3:
charCount(" ")
charCount("")

// for 4:
charCount() // do we return null, false, undefined, error? 
charCount(null) 
````

### Step 3: Break it down 

- communicate what you're doing, talk out the steps 
- explicitly write out the steps you need to take
  - helps highlight problems
  - keeps you focused
- e.g.:
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

### Step 4: Solve or Simplify

- solve the problem if you can, or solve a simpler problem!
- Simplify!:
  1. find the core difficulty in what you're trying to do 
  2. temporarily ignore that difficulty
  3. write a simplified solution
  4. incorporate that difficulty back in


### Step 5: Look back and refactor

Ask yourself these questions:
- can you check the result?
- can you derive the result differently?
- can you understand it at a glance?
- can you use the result or method for some other problem?
- can you improve the performance of your solution?
- can you think of other ways to refactor?
- how have other people solved this problem? 

---

## Problem Solving Patterns

1. devise a plan for solving problems 
2. master common problem solving patterns

some patterns:
- frequency counter
- multiple pointers
- sliding window
- divide and conquer 
- dynamic programming
- greedy algorithms
- backtracking
- more! 

### Frequency Counters

- use objects or sets to collect values / frequencies of values 
- this can often avoid the need for nested loops or O(n^2) operations with arrays / strings 
- usually O(n) time 

An example:
- write a function called `same` which accepts two arrays. the function should return true if every value in the array has its corresponding value squared in the second array. the frequency of values must be the same. order doesn't matter.
````js
// examples:
same([1, 2, 3], [4, 1, 9]) // true (order isnt there but frequency is the same)
same([1, 2, 1], [4, 4, 1]) // false (frequency isn't the same, we need 1, 1, 4)
````

a naive solution:
````js
function same(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2) // this is another loop. so O(n^2)
    if (correctIndex === -1) {
      return false
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}
````

refactored using frequency counter pattern:
````js
function same2(arr1, arr2){
  if(arr1.length !== arr2.length){
      return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for(let val of arr1){
      frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for(let val of arr2){
      frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
  }
  for(let key in frequencyCounter1){
      if(!(key ** 2 in frequencyCounter2)){
          return false
      }
      if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
          return false
      }
  }
  return true
}
````
- instead of looping over the array and then using a nested loop to compare, we loop over each array individually. 
- two seperate loops is vastly better than nested loops 
- essentially we're using objects, if we remember above the big O of objects for access is O(1), where for arrays, which are indexed, is O(n)

1. first we check if the lengths are the same, if not exit with false
2. then we create objects out of our arrays O(n)
3. then we check inside those objects using O(1)
  - first we need the key squared to exist in frequencyCounter2 (i.e. if we have a 2 in the first array, we need a 4 in the second array) as per the algorithm rule
  - then we need to check that the values of the keys are correct (i.e. that they occur the same amount of times each)

### Multiple Pointers

- Creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition
- very efficient for solving problems with minimal space complexity as well

- we have some sort of linear structure like an array or a string or a doubly/singly linked list 
- we will be searching for a pair of values that meets a condition
- use two references: 
  - i.e. the ends, and work towards the middle
  - or we could start in the middle and work towards the end, anything 

- write a function called `sumZero` which accepts a sorted array of integers. the function should find the first pair where the sum is 0. return an array that includes both values that sum to zero or undefined if a pair does not exist  
````js
sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([-2, 0, 1, 3]) // undefined
sumZero([1, 2, 3]) // undefined
````

a naive solution:
````js
const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const arrNum = arr[i];
  
    for (let j = arr.length - 1; j >= arr.length - 1; j--) {
      const revNum = arr[j];
      const sameIndex = i === j;

      if ((arrNum + revNum === 0) && !sameIndex) {
        return [arrNum, revNum]
      }
    }
  }
}
// time complexity - O(n^2) => its a nested loop
````

refactored using multiple pointers pattern:
````js
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
````
- time complexity is O(n)
- space complexity is O(1)

## Sliding Window Pattern

- this pattern involves creating a window which can either be an array or number from one position to another
- depending on a certain condition, the window either increases or closes (and a new window is created)
- very useful for keeping track of a subset of data in an array/string etc 

- i.e. a function that finds the longest sequence of unique characters, i.e. for "hellothere"
  - "hel", "lother" => lother is longer 

- wirte a function called 'maxSubarraySum' which accepts an array of integers and a number called n. the function should calculate the maximum sum of n consecutive elements in the array. 


- naive solution, O(n^2)
````js
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

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
````

- better solution, O(n):
````js
function maxSubarraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;
  
  for (let i = num; i < arr.length; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum
}
````


## Divide and Conquer Pattern

- This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data 
- this pattern can tremendously decrease time complexity
  - sorting algorithms cover this in-depth, i.e. quick sort / merge sort are examples 
  - depending on the problem, can be a significant helper

- example:
  - given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. if the value is not found, return -1
````js
search([1, 2, 3, 4, 5], 4) // 3 (index of 3)
search([1, 2, 3], 11) // -1 (value not found)
````

- naive solution
  - linear search, O(n)
````js
function search(arr, val) {
  for ( let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1
}
````

- refactored solution
  - binary search, O(log n)
````js
function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    let currentElement = array[middle]

    if (currentElement < val) {
      min = middle + 1
    }
    else if (currentElement > val) {
      max = middle - 1
    }
    else {
      return middle
    }
  }

  return -1
}
````

---

## Recursion 

Recursion is a different way to think about solving problems, we can do it iteratively or recursively. 

- what recursion is and how it can be useful:
  - recursion is a process (a function) that calls itself 
  - recursion is used a lot - JSON.parse / JSON.stringify is recursive under the hood, same with DOM traversal, `document.getElementById` etc
  - sometimes recursion is cleaner to iteration

- two essential components of a recursive function: 
  - invoke the same function with a different input until you reach your base case
  - base case: the condition when the recursion ends
  - the two essential parts:
    - Base Case (end condition)
    - Different input (you call it with different arguments each time)

basic example using recursion:
````js
function countDown(num) {
  if (num <= 0) {
    console.log('all done')
    return // we have to return to stop it
  }
  console.log(num)
  num--
  countDown(num)
}

countDown(5)
````

same thing using iteration:
````js
function countDownIteration(num) {
  for (var i = num; i>0; i--) {
    console.log(i)
  }
  console.log('all done')
}
````

- visualise the call stack to better debug and understand recursive functions
  - when a function is invoked, its pushed on the top of the call stack
  - when we write recursive functions, we keep pushing new functions onto the call stack
````js
function sumRange(num) {
  console.log(num)
  if (num === 1) return 1
  return num + sumRange(num-1)
}
sumRange(3)
````
  - in the above recursion example, the first time sumRange is called, it returns `3 + sumRange(2)`. the second sumRange, sumRange(2) then goes to the top of the callstack, which returns `2 + sumRange(1)`. sumRange(1) then returns 1 using the if case. None of them actually return until sumRange(1), which is top of the call stack, resolves. It resolves to 1, so then sumRange(2) can finish - it resolves to 3 (2+1), then sumRange(3) can finish which resolves to 6 (3+3) and we have our final answer.

- use helper method recursion and pure recursion to solve more difficult problems 


- without the 'base case' which is when the recursion stops, we get 'maximum callstack size exceeded' error. the maximum call stack is somewhere around 10,000 but it differs depending whats running the js. 
- you need a base case which returns something without calling itself again, this is what recursion is based on. 

### Helper Method Recursion

````js
function outer(input) {
  let outerScopedVariable = []

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--)
  }
  helper(input)

  return outerScopedVariable
}
````
- we have two functions, the `outer` function and the recursive function inside, `helper`.
- this enables us to have a piece of data that persists throughout, the outerScopedVariable. since we don't have persistence in a recursive function


### Pure Recursion

- similar to helper, but it doesn't use an outer variable
- probably more difficult to wrap your head around for more complex problems 
````js
function collectOddValuesPure(arr) {
  let newArr = []

  if (arr.length === 0) return newArr

  if (arr[0] % 2 !== 0){ // if num is odd, add to newArr
    newArr.push(arr[0])
  }

  // this goes through and returns the array 
  newArr = newArr.concat(collectOddValuesPure(arr.slice(1)))
  return newArr
}
````
- pure recursion tips:
  - for arrays use slice, spread operator, concat. makes copies so you dont mutate 
  - for strings, use slice / substr / substring to make copies because they are immutable 
  - to make copies of objects, use Object.assign or the spread operator


---


## Searching Algorithms

- describe what a searching algorithm is 
- implement linear search on arrays
- implement binary search on sorted arrays
- implement a naive string searching algorithm
- implement the KMP string searching algorithm

### Linear Search

- linear search is the simplest way to search: look at every element, in order, in the array and check if its the value we want
  - good approach for unsorted data
    - `indexOf`, `includes`, `find`, `findIndex` built-in js array methods do this
- for sorted data there are better ways to search
````js
// example linear search: function accepts array and value
// loop through array and check if current element is equal to the value
// if it is, return index that its found. if never found, return -1 

const linearSearch = (arr, val) => {
  let result = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      result = i
    }
  }

  return result
}

console.log(linearSearch([1, 2, 3], 3)) // 2
console.log(linearSearch([1, 2, 3], 4)) // -1 
````

- Big O of linear search:
  - best case is O(1) , i.e. we find it straight away
  - worst case is O(n), i.e. its the last element. average is O(n) too, general trend.

### Binary Search 

- binary search is a much faster form of search
- rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time 
- binary search only works on sorted arrays 
  - the idea is divide and conquer 
  - since theyre sorted, binary search picks a halfway point in the array. 
  - i.e. is it before or after the middle 
  - if its after, we then make all thats after the new array. and again check the mid point of the new set. is it before or after?
  - the process repeats itself until it finds the answer 

````js
const binarySearch = (arr, val) => {
  let leftP = 0
  let rightP = arr.length - 1

  while (leftP < rightP) {
    const midP = Math.ceil((rightP + leftP) / 2)
    if (arr[midP] === val) {
      return midP
    }

    if (arr[midP] < val) {
      leftP = midP
    }

    if (arr[midP] > val) {
      rightP = midP
    }
  }

  return -1
}
````

- big O of binary search:
  - best case is O(1), if we find it straight away
  - worst case is O(log n), also the average case as this is the trend. O(log n) is much better than O(n), almost the same as O(1)

---

### Naive String Search

- suppose you want to count the number of times a smaller string appears in a longer string 
- a straightforward approach involves checking pairs of characters individually

````js
const naiveStringSearch = (longString, shortString) => {
  let shortStringP = 0
  let matchCount = 0

  for (let i = 0; i < longString.length; i++) {
    if (shortStringP === shortString.length - 1) {
      if (longString[i] === shortString[shortStringP]) {
        matchCount++
      }
      shortStringP = 0
    }  

    if (longString[i] === shortString[shortStringP]) {
      shortStringP++
    } else if (longString[i] !== shortString[shortStringP]) {
      shortStringP = 0
    }
  }

  return matchCount
}
````

---

## Sorting Algorithms

- sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order
- Examples: 
  - sorting numbers from smallest to largest
  - sorting names alphabetically
  - sorting movies based on release year 
  - sorting movies based on revenue 
- there are many different techniques and ways to sort, different ones have their own advantages and disadvantages 

### built-in javascript sort 
  - `Array.sort()`:
  - doesn't always work the way we think, i.e it sorts strings the way we do
  - doesn't seem to sort numbers the way we'd imagine - it defaults to sorting based on unicode 
  - you can tell `.sort()` how to sort by passing it an argument, an optional comparator function
    - comparator looks at pairs of elements (a and b), determines their sort order based on the return value
    - if it returns a negative number, a should come before b
    - if it returns a positive number, a should come after b
    - if it returns 0, a and b are the same as far as the sort is concerned
````js
function numberCompare(num1, num2) {
  return num1 - num2
}

[6, 4, 15, 10].sort(numberCompare) // [4, 6, 10, 15]
````

### Bubble Sort 

- not super efficient or commonly used. but good to build on
- a sorting algorithm where the largest values bubble to the top (i.e. to end of array)
  - as we loop through each item, we check with the one in front of it and see if its larger or smaller than it. if it is large, we swap them, until the larger value goes to the end 
  - through every-run x throughs, we know the last x items are sorted

- since we need to compare two items and swap them, i.e: 
````js
function swap(arr, index1, index2) {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

const bubbleSort = (arr) => {
  for (let i = arr.length - 1; i > -1; i--) {
    // loop over arr arr.length times
    for (let j = 0; j < i; j++) {
      // loop over arr.length within loop
      if (arr[j] > arr[j+1]) {
        // swap them
        swap(arr, j, j+1)
      }
    }
  }

  return arr
}

console.log(bubbleSort([1, 3, 5, 2]))
````
- in the above solution, we start i at the end and go down. as i gets less each time, j doesn't need to know about the other values as they have already been sorted. 
  - i.e. [37, 45, 29, 8], the first pass will put 45 at the end. we no longer need our sort to look at that last index, so the condition for the second loop is that j < i
  - this avoids needless comparisons, which would happen if our outer loop was a simple `i = 0; i < arr.length; i++`, we want to shrink the number of comparisons we make as we're sorting as we go.

- theres an optimised version in `s11-sorting-algo.js` which checks if it doesn't need to be swapped anymore

- big O Complexity of bubbleSort: 
  - in general O(n²)
  - if no swaps, its O(n)


### Selection Sort 

- similar to bubble sort, but instead of first placing large values into sorted at end of the array, we place small values into the sorted position 
  - sorted data is accumulated at the beginning
- we iterate through the array looking at the element and the one after it, taking note of what is the smallest element. when we get to the end, we swap the smallest element with whatever was at index 0. now index 0 is sorted, and we look from index 1 onwards. 
````js
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

console.log(selectionSort([2, 78, 1, 22, 55, 3]))
````

- big O Complexity of selection Sort: 
  - in general O(n²)


### Quick Sort

- split up array until we hit arrays that are 0 or 1 item long, i.e. they are sorted
- works by selecting one element (any, could be the first one, 0th index) (Called the 'pivot') and finding the index where the pivot should end up in the sorted array. 
  - move all numbers lower than that element to the left of that element, and all the numbers greater than that element to the right of that element.
  - not sort them all, just move them to the correct side. 
  - we know the pivot number is in the right index - but we're unsure about everything else 
- once we know the pivot is positioned correctly, quick sort can be applied on either side of the pivot. 

Pivot helper:
- do the above and do it in place (do not create a new array)
- when complete, the helper should return the index of the pivot

- the runtime of quicksort can change depending on where the pivot is chosen. for simplicity we'll always choose the pivot to be the first element
````js
const pivotHelper = (arr, startIndex = 0, endIndex = arr.length - 1) => {
  const pivot = arr[startIndex]
  let pivotIndex = startIndex

  for (let i = startIndex + 1; i < arr.length; i++) {
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
````

- Quick sort Pseudocode
  - calls the pivot helper on the array, gets the index back
  - when the helper returns the updated pivot index, we recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
  - your base case occurs when the subarray has less than two elements


- Big O of quicksort:
  - Time complexity (best and average) is O(n log n)
  - Time complexity (worst) is O(n²)
    - i.e. if array is already sorted, whole thing will need to be 
