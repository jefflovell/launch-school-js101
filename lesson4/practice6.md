### How does Array.prototype.fill work? Is it destructive? How can we find out?

```
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);
```

***Answer:***
`Array.prototype.fill()` mutates the calling array, filling the array with a specified value from a starting position (default 0) to an ending position (default `array.length`).

`someArray.fill(fillValue, startIndex, endIndex)`

We can find out whether its destructive (and how it works) by reading the documentation (e.g. MDN) or by calling it on a variable initialized to an array, and then calling that array again and inspecting its value. If `fill()` mutates the caller, the array's value will have updated to the return value of `fill()`;

```
let someArray = [1, 2, 3, 4];
someArray.fill(5); // [5, 5, 5, 5];
console.log(someArray); // [5, 5, 5, 5];
```

***LS Answer:***
If you're unsure of how a method works the best thing to do is to read its documentation. Along with that, testing the method in node console can be very helpful. In this case, we can quickly check if fill is destructive or not by running the code in the console.

By reading the documentation and trying some code in the console, we can determine that `fill` takes a value and two indices and replaces the indices in between those two given indices with the given value. We can also verify that it's a destructive method.