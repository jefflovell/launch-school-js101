### Practice Problem 12 ###

***Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.***

```
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
```
***Answer:***
- Since we want an identical structure we'll use map to build the final return array.
- we'll use filter on each element since all elements are arrays, checking whether its a multiple of 3.

`arr.map(element => element.filter(number => number % 3 === 0));`
`// => [ [], [ 3 ], [ 9 ], [ 15, 18 ] ]`
***LS Answer:***
```
arr.map(subArr => {
  return subArr.filter(num => num % 3 === 0);
});
// => [ [], [ 3 ], [ 9 ], [ 15, 18 ] ]
```

*We know that we want to return a new array with the same structure, so map is an excellent choice to call on the original array. For each subarray, we then return a subset of the subarray that contains only multiples of the number 3.*