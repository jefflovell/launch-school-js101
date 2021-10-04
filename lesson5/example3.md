## Example 3

***Map out a detailed breakdown for this example using an approach similar to the previous two. What do you think will be returned and what will the side-effects be? You shouldn't have to guess. While there isn't a single right way to break this code down, you should be able to identify all of the different parts like we did above. You have all the knowledge you need.Take your time and analyze the code as completely as you can. Compare your solution to our solution.***

```
[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});
```

***Answer:***
- On line 1 we call the `map` function on a 2 dimensional array with each inner array containing 2 elements.
- Each of the two elements of the outer array `[1, 2]` and `[3, 4]` are passed to the callback's parameter and assigned to the local variable `arr`.
- On the first iteration the `arr` will reference the inner array `[1, 2]`, therefore at line 2 when we print the value of `arr[0]` we will print `1`.
- On line 3 the value of `arr[0]`, `1`, will be returned and used as the transform value by `map`. This explicit return is required because of our multi-statement callback body (as delimited by `{}`).
- The loop will reset for the next element in the input array which is `[3, 4]` and perform the same operations resulting in `3` printed to console and a return value of `3`
- Map is a non-destructive method which always returns an array, so our final output will be a new array of values mapped to the same number of elements (`2`) as our original array => `[1, 3]`

***LS Answer:***
This example outputs and returns the following:

```
1
3
=> [1, 3]
```

When breaking down the example, pay close attention to:

- The return value of the callback
- The return value of the method
- Any side-effects

The main difference to understand here is the return value of the callback: we're explicitly returning the first element of each subarray with return. The callback's return value is then used by map to perform the transformation, replacing the inner array with a number. Finally, map returns a new array with two numbers in it.

