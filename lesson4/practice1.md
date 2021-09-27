### What is the return value of the filter method call below?  Why?

`[1, 2, 3].filter(num => 'Hi');`

***Answer:***

Filter is a selection method of arrays which returns a new array.
Filter accepts a callback function and passes each element of the calling array to the callback as an argument.
For each element of the calling array, the callback's return value is evaluated for truthiness by filter.
If the return value of the callback is truthy, the current element is selected and added to the array returned by filter.

Because the callback's return value is always string `'hi'`, the callback value is always truthy. Therefore, every element of the calling array `[1, 2, 3]` will be selected by filter and added to the returned array.

Expected Output: `[1, 2, 3]`

***LS Answer:***

filter performs selection based on the truthiness of the callback's return value. In this case, the return value is always `'hi'`, which is truthy. Therefore filter will return a new array containing all of the elements in the original array.