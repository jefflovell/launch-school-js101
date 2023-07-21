### Practice 9 ###
***Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.***

```js
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
```

***Answer:***
```js
function mixedSort(nestedArray) {
  let arrayCopy = JSON.parse(JSON.stringify(nestedArray));
  return arrayCopy.map(innerArray => {
    if (typeof innerArray[0] === 'number') {
      innerArray.sort( function(a, b) {
        return a - b;
      })
    } else {
      innerArray.sort();
    }
    return innerArray;
  })
}

// [ [ 'a', 'b', 'c' ], [ -3, 2, 11 ], [ 'black', 'blue', 'green' ] ]
```

***LS Answer:***
*This is far cleverer than my answer...*
*Take care of the copy at the subarray level and rely on map's return array to avoid deep copy issues*
```js
arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    // we have an array of strings
    return subArr.slice().sort();
  } else {
    // we have an array of numbers
    return subArr.slice().sort((a, b) => a - b);
  }
});

// [ [ 'a', 'b', 'c' ], [ -3, 2, 11 ], [ 'black', 'blue', 'green' ] ]
```
*From the problem description, we know that we need to return a new array with its contents transformed in some way, so map is a fairly obvious choice for the initial method that we need to call on the array.*
*We also know that we want each subarray to be ordered, so sort is an obvious choice here. However, since we're dealing with two types of arrays, we'll have to use two versions of sort. For the string arrays, we can use sort without arguments to sort them alphabetically. For the numbers, we must use a callback; otherwise, the numbers will be sorted by their UTF-16 character values.*
*We're using slice to obtain a copy of the subarray since sort is a destructive operation, and we don't want to mutate the subarrays.*
