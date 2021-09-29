### What is the return value of `map` in the following code?

```
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
```

***Answer:***
`map`'s callback return value is used as a `transformation criterion` for `map`.  `map` is a non-destructive array method which returns an array with the same number of elements as the array it is called on. In this example, since the element `'ant'` does not have a length greater than 3, it will not be returned by the callback.  However, map will still generate a value of `undefined` for that index in the output array.  So the return value of `map` in this example will be `[undefined, 'bear']`

***LS Answer:***
There are some interesting things to point out here. First, the return value of `map` is an array, which is the collection type that `map` always returns. Second, where did we get that `undefined` value? If we look at the if condition `(elem.length > 3)`, we'll notice that it evaluates as true when the length of the element is greater than 3. In this case, the only value with a length greater than 3 is `'bear'`. Thus, for the first element, `'ant'`, the condition evaluates as false and elem isn't returned.

When a function doesn't explicitly return something, it implicitly returns `undefined`. That's why we see `undefined` as the first element of the returned array.