### Example 5 ###

***Next, let's tackle a slightly more complex example. What will the return value be in this example? Use what you've learned so far to break it down on your own before checking the solution below.***

[[1, 2], [3, 4]].map(arr => {
  return arr.map(num => num * 2);
});

*** Answer: ***
- this code will return a new array consisting of:
`[[2, 4], [6, 8]]`
** However, that value is never used because it is not assigned to a variable **

- on line 1 we are calling `map` on an array literal containing 2 elements each consisting of an array of 2 elements.
- for each element of the outer array we are passing it by reference to `map`'s callback via the parameter `arr`.
- on line 2 we are calling another instance of `map` and passing each element by reference to the callback via the parameter `num`.
- because we are using a single-line `arrow functione expression` callback, the return value of the inner `map`'s callback is our transformation criterion `num * 2`.
- on first iteration the outer `map` call on line 1 passes `[[1,2], [3,4]][0]` by reference to the parameter `arr` resulting in an assignment value of `[1, 2]`.
- The inner `map` call on line 2 assigns `[1, 2][0]` or `1` to the parameter `num` by reference.
- it then returns the value of `num * 2` which is used to build a new array.
- this process continues for all elements (`arr[0]` and `arr[1]`) at which point the inner `map` method exits and iteration of the outer `map` method moves on to the next element of the array literal `[[1, 2], [3, 4]]`.
- Once all elements of the outer array (literal) have been iterated over, the outer `map` method exits returning a new array of `[[2, 4], [6, 8]]` but that value is never used or assigned.

*** LS Answer: ***
This example will return the following:
```
[ [ 2, 4 ], [ 6, 8 ] ]
```

The goal of this code is to multiply each value within the nested array by 2. We accomplish this by using map, which returns a new array containing values transformed based on the callback's return value. However, we have to call map twice, paying extra attention to the 4 return values: the two map invocations and the callbacks within each of the invocations.

***Action,	Performed on,	Side Effect,	Return Value,	Is Return Value Used?***
- method call (map),	Original array,	None,	New transformed array,	No
- outer callback execution,	Each sub-array,	None,	New transformed sub-array,	Yes, used by top-level map for transformation
- method call (map),	Each sub-array,	None,	New transformed sub-array,	Yes, returned by outer callback
- inner callback execution,	Element of the sub-array in that iteration,	None,	A number,	Yes, used by inner map for transformation
- num * 2	Value of num parameter,	None,	A number,	Yes, returned by inner callback
**
If you look closely and try to understand every line of code, there are more than 4 return values that you need to examine: the num * 2 expression has a return value. By now, you should be starting to realize that the return value of every expression is important. You can ignore an expression's return value when it isn't used in the code. More often than not, though, some implied return value is used in subtle ways that affect your code. Pay attention to the details.
**