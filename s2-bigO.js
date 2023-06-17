console.log('hi')

function addUpTo(n) { // O(n)
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += 1;
  }
  return total;
}

function addUpTo(n) { // O(1)
  return n * (n + 1) / 2
}


const t1 = performance.now();
addUpTo(1000000);
const t2 = performance.now();

console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`)