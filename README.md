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

