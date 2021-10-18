### Example 9 ###
*Consider the following code:*

```
[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});
```
*This example is more complicated than the rest, but, at this point, you should be able to break it down effectively. Use the tools you've learned about in this lesson and take as much time as needed. Work on breaking down each component and understanding the return value of each expression. What will the final return value be? Check your answer only after you've tried this on your own.*

***Answer:***
this code returns: `[[[2, 3], [4, 5]], [6, 7]]`

- on line 1 we have an array with 2 elements:
  - array[0]is an array of 2 elements:
    - array[0][0]is an array of 2 elements `[1, 2]`
    - array[0][1] is an array of 2 elements `[3, 4]`
  - array[1] is an array of 2 elements `[5, 6]`
  - map is called on the outermost array passing each element as an argument to the parameter `arr`.
    - Therefore we know that our final return value will be an array with 2 elements.
  - map will perform a transformation based on the return value, which will be the evaluation of another `map` call.
    - because the first nested array is also an array of 2 elements, we know that the return value of this `map` call will be an array of 2 elements.
  - if the element being passed to this map call is a number, we will add 1 to the number and return it.
  - if, instead, it's an array, we will make another map call that computes the same return value on the inner elements.
    - because all nested arrays are arrays of 2 elements, this return value will also be an array of 2 elements.
  - the final array will be a structurally identical array with the values: `[[[2, 3], [4, 5]], [6, 7]]`

  ***LS Answer:***
  *The tricky part about this example is that the original array has uneven nested levels. There are two main subarrays, the first of which contains two additional nested subarrays. If we want to do something with all of the numbers in this structure, we first need to find a way to access those number, regardless of how deeply nested they are. To do this, we determine whether the current element is an array or a number, then execute the appropriate code.*

*map is an excellent choice for this task since it returns a new array that contains transformed values. This way we can ultimately return a new array with the same nesting structure as the original.*

*In practice, this type of nested data processing is typically a sign of bad design. However, if you ever find yourself in that situation, you should be confident in your ability to work through it.*