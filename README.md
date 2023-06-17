# JavaScript Algorithms and Data Structures

Have node installed and simply run each file, i.e.: `node <name-of-file>.js`

Todo: 

- [Section 2: Big O](#big-o-notation)
  - timing our code
- Section 3: Performance of Arrays and Objects
- Section 4: Problem solving approach
- Section 5: Problem solving patterns 
- Section 6: Optional challenges
- Section 7: Recursion
  - Section 8: Recursion problems 
  - Section 9: Bonus challenging recursion problems (probs don't do)
- Section 10: Searching algorithms 
  - Section 11: Bubble Sort => do this 
  - Section 12: Section sort => do this 
  - Section 13: Insertion sort => do this 
  - Section 14: Comparing above 3 sorts
  - Section 15: Merge sort (probs don't do)
  - Section 16: Quick sort (probs don't do)
  - Section 17: Radix sort (don't do)
- Section 18: Data structures intro (whats the best? where do they excel) => maybe don't do the rest? see how it goes after intro. 
  - Section 19: singly linked lists
  - Section 20: doubly linked lists (can skip this if we do singly linked)
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

===

## Big O Notation

s2-bigO.js 

- Whats the need for big O notation?
  - if we have two valid solutions to a problem, some are "better" and run faster, and this can matter at scale
  - leetcode for example compares them for speed 

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

- f(n) = n squared
````js
function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
````
- the above is O(n squared), the runtime grows exponentially with n


### Simplifying Big O Expressions 

- Smaller terms / constants don't matter, we just want the general trend
  - O(2n) is simplified to O(n) => increase with n
  - O(500) is simplified to O(1) => doesn't increase with scale
  - O(13n squared) is simplified to O(n squared) => increases at n squared
  - O(n squared + 5n + 8) => is simplified to O(n squared)
    - the 5n + 8 is insignificant if we zoom out to a large scale 

- Big O shorthands / rules of thumb:
  - arithmetic operations are constant. adding, dividing, subtracting are constant, i.e. O(1)
  - variable assignment is constant 
  - accessing elements in an array (by index) or object (by key) is constant 
  - in a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
    - i.e. if only constants happen in the loop, its O(n). but if another loop happens, its O(n squared)

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



