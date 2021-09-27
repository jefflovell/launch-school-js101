### What is the return value of `map` in the following code? Why?

```
[1, 2, 3].map(num => {
  num * num;
});
```

***Answer:***
`Map` is an array method that returns a new array containing the same number of elements as the calling array.
Each element in the array is iterated over by `map` and is passed to `map` callback as an argument.
For each element passed to `map`'s callback, a return value is produced by the callback which is used by `map` to transform the element.
In this example, the intention appears to be to transform each element by multiplying it by itself (`num * num`).
However, because the callback is written as an `arrow function` using curly braces `{}`, an `explicit return statement` must be included and has been omitted (e.g. `return num * num;`).
Therefore, the `implicit return value` of the callback is `undefined`.
This causes `map` to transform each element using `undefined` as the transform value resulting in a return array of `[undefined, undefined, undefined]`
note: `num * num` is stored in the local variable `num` and is discarded after each iteration since its value is never `returned` or `reassigned`.

***LS Answer:***
`map` looks at the return value of the callback function to decide the elements in the returned array. Each element in the original array is replaced by what the callback returns for that element. In this case, there's no explicit return statement in the callback function, which means that the callback returns `undefined` each time.