### Example 8 ###
*This example contains a three-level nested array. Take your time and try to break down each component. Hint: the top-level array is a 2-element array.*

```
[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

// => [ undefined, undefined ]
```

*The key things to focus on with this example is understanding how forEach method works and the return value of the callback. There are a total of 6 return values since there are 3 method calls and 3 callbacks (that is, ignoring the return value of this expression: element3.length > 0). By looking at the example, you should notice that the first method call within map is forEach. If we understand forEach, we know that it doesn't care about the callback's return value and it always returns undefined. Therefore, just by looking at line 2, we can already say that the return value of map will be a new array that contains undefined values. In this example, that's all the interesting behavior there is as there are no side effects deeper in the code.*