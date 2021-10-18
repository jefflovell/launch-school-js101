### Example 7 ###
*It can be tricky working with different types of values in a nested array if you want to select nested elements based on some criterion. For example, take the 2-element array shown below where we want to select numbers greater than 13 and strings shorter than 6 characters. The trick here is that the elements are in a two-layer nested array data structure.*

```
[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});
// => [ [ 27 ], [ 'apple' ] ]
```

*At first, you might think to reach for the filter method to perform the selection. However, since we're working with a nested array, that won't work. We first need to access the nested arrays before we can filter the value we want. To select the required values, we must first determine whether an element is a number; there are plenty of ways to do that, but we went with the straightforward `typeof item === 'number'` test.*

*One of the main reasons that we use map in this example is not only to iterate over the array and access the nested arrays but to return a new array that contains the selected values. If we used forEach instead, we wouldn't have a useful return value since forEach always returns undefined. We would need to collect the desired results to an extra variable.*