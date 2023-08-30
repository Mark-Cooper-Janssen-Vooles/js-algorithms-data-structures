var kidsWithCandies = function(candies, extraCandies) {
    const result = []
    // sort candies, and work out which kid has the most candies
    let mostCandiesIndex = 0
    for (let i = 1; i < candies.length; i++) {
      if (candies[i] > candies[mostCandiesIndex]) {
        mostCandiesIndex = i
      }
    }

    console.log(candies[mostCandiesIndex])

    // iterate through candies and compare to kid with most
    for (let i = 0; i < candies.length; i++) {
      console.log(candies[i] + extraCandies, candies[mostCandiesIndex])

      if (candies[i] + extraCandies >= candies[mostCandiesIndex]) { // current candies are greater
        result.push(true)
      } else {
        result.push(false)
      }
    }

    return result 
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)) // [true, true, true, false, true]