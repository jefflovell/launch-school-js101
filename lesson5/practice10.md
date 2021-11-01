### Practice 10 ###
***Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.***
```
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
```

***Answer***
```
let copyArr = arr.map( subArr => {
  if (typeof subArr[0] === 'number') {
    return subArr.slice().sort( ( a, b ) => b - a );
  } else {
    return subArr.slice().sort().reverse();
  }
})

console.log(copyArr);
// [ [ 'c', 'b', 'a' ], [ 11, 2, -3 ], [ 'green', 'blue', 'black' ] ]
```
***LS Answer:***
```
arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a < b) {
      return 1
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});

// => [ [ 'c', 'b', 'a' ], [ 11, 2, -3 ], [ 'green', 'blue', 'black' ] ]
```
*We use the first if to take care of the case where the subarray elements are numbers. The second if/else compares the strings with each other and returns -1, 1 or 0 based on the comparison.*