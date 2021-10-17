### Example 4 ###

***Can you take this code apart, just like before? What will it output and what will the value of myArr be? Check the solution below once you have tried this on your own.***

```
let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});
```

***Answer:***
- on line 1 we initialize the variable myArray to a `forEach` expression called on a nested array of two elements each containing an array of two elements.
- each element of the outer array is passed by reference to the callback via the `arr` parameter.
- `forEach` always returns undefined and that return value is not used. `forEach` simply provides us with a method of traversing our outermost array elements. Therefore, we know the ultimate return value of our function will be `undefined`.
- On line 2, each element passed to `forEach` will be transformed using `map`.
- Because the input `arr` consists of 2 elements, we can expect the return value of `map` to be a new array of 2 elements on each iteration.
- On line 3, we have a conditional statement that `map` will use as a criterion for transforming the current element.  If the value of the current `num` being evaluated by `map` is greater than 5, we will log the value of `num` and return the value of `console.log(num)`, which is equivalent to returning `undefined`'.
- Since there is no `else` clause, any value that fails the conditional will implicitly return `undefined` without logging the value to console.
- On first iteration `arr` is a reference to `myArr[0]` the value of which is `[18, 7]`.
- That value is then transformed using `map` which first assigns `myArr[0][0]` or `18` to the parameter `num` and evaluates whether it is `> 5`.  Since this is true, we can expect the value of `console.log(num)` or `undefined` to be written to `map`'s return array at `index 0`.
- following execution back up we can expect the following transformation to the calling array regardless of input:`[[undefined, undefined], [undefined, undefined]]` because of the explicit return statement set in our `map`'s conditional block.
- the final return value will be that of the `forEach` method as previously stated `undefined`.
- we can also expect the console to print the following values in order: `18`, `7`, `12`.

***LS Answer:***
This example outputs and returns the following:

```
18
7
12
=> undefined
```

Within this example, there are multiple return values as well as side-effects. Make sure that you understand, precisely, how the code works, line by line.

```
Action | Performed on | Side Effect | Return Value | Is Return Value Used?
variable declaration and assignment	| n/a	| None | undefined (variable declaration always evaluates to undefined) |	No
method call (forEach)	| [[18, 7], [3, 12]] | None	| undefined	| Yes, used to assign to myArr
outer callback execution	| Each sub-array	| None	| [undefined, undefined]	| No
method call (map)	| Each sub-array	| None	| [undefined, undefined]	| Yes, returned by the outer callback
inner callback execution	| Element of the sub-array in that iteration	| None	| undefined	| Yes, used to transform the array
comparison (>)	| Element of the sub-array in that iteration	| None	| Boolean	| Yes, evaluated by if
method call (console.log)	| Element of the sub-array in that iteration	| Outputs a string representation of a Number	| undefined	| Yes, used to determine return value of inner callback
```

There are 4 return values to pay attention to here: the return value of calls to forEach and map and the return value of both callbacks. When determining the return values, it's important to understand how the method used in the example works. In this case, we're using forEach on the outside, which ignores the return value of the callback. Thus, we can see that the value of myArr is undefined.

Because forEach ignores the callback's return value, this was a relatively straight forward example.

Once again, your solution doesn't need to be precisely the same as ours.