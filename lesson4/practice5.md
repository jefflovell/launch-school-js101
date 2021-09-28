### What is the callback's return value in the following code? Also, what is the return value of `every` in this code?

```
[1, 2, 3].every(num => {
  return num = num * 2;
});
```

***Answer:***
the callback's return value is explicitly `2` on iteration 1; `4` on iteration 2; and `6` on iteration 3.  Since all are positive integer numbers they are all `truthy`.

Therefore, the return value of `every()` will be `true`

***LS Answer:***
The return values of the callback will be `2`, `4`, and `6` on the respective iterations. The expression `num = num * 2` is an assignment expression and will evaluate as the expression on the right-hand side of the assignment and that is what gets returned in each iteration. Since all of those numbers are `truthy` values, every will return `true`.