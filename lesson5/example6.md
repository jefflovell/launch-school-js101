### Example 6 ###
**
Let's mix things up even more. In the following example, we have an array of objects, and we want to select all of the elements where every key matches the first letter of the value.
**
```
[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]
```
**
A lot is going on here, but you have the knowledge that you need to take it apart, line by line, letter by letter. We won't provide a table of steps as before, but see if you understand every line and every letter in the code. If you don't, take your time and study it; you should be able to deconstruct this code to its core.
**

***Answer:***
This code will return the following array:
```
[{c: 'cat', d: 'dog}]
```

- on line 1 the `filter` method is being called on an array literal containing an object literal as the value of each element.
- `filter` iterates through each element of the calling array as it is passed as an argument to the parameter `object`.
- if the return value of the `callback` on line 2 is `truthy`, filter will append that value to a new array, which is returned when filter completes execution.
- the return statement of filter on line 3 is a chain of method calls which we will break down further:
  - since the value of our parameter `object` will always be an `object literal`, that object is first iterated over using the `Object.keys` method passing the `object literal` as an argument.
    - This is not an example of `variable shadowing` because a new locally scoped variable is not created, this is a reference to the same `object` parameter from our `filter` callback on line 1, the value of which is the `object literal` at the current index over which `filter` is iterating in our `array literal` on which `filter` was called.
  - After iterating over all properties of the object passed to it as an argument (`object`), `Object.keys` returns an array literal of the keys--in this case, the keys of `object`--which calls the `Array.prototype.every()` method.
  - The `every()` method takes a callback and iterates over each element of the calling array, evaluating whether every element of the calling array passes conditional statement. If all elements pass the conditional, `every()` returns true, otherwise false.
  - the return condition of `every` is whether the element passed as an argument to the parameter `key` is `strictly` equal to `object[key][0]`.  This warrants further breakdown:
    - `object` is the parameter of our filter callback.  So on first iteration its value is the object literal `{a: 'ant', b: 'elephant'}`.
    - though we built a new array using `Object.keys` on which we are calling `every`, the value of `object` has not changed.  By calling `every` on the return value of `Object.keys`, we can use the parameter `key` and `bracket notation` to reference the `value` of the property of `object` who's property `key name` matches the value of `key`.  So the expression `object[key][0]` evaluates to "the first character of the value of `object[propertyKeyName]`.  On first iteration this would be 'a' of the value 'ant'.  The conditional then compares if 'a' is strictly equivalent to the key name 'a' which is true, so that element returns a truthy value and iteration proceeds to the next element of `Object.keys(object)`'s return value (`{b: 'elephant'}`).
    - Since 'b' !== 'e', `every` returns false.
    - Since `false` is not a truthy value, filter does not return the value and moves on to the next element.
    - Therefore, since every property of `{c: 'cat', d: 'dog'}` pass the test, and filter returns a new array of elements, we get the return value of `[{c: 'cat', d: 'dog'}]`.

***LS Answer:***
The first thing to notice here is the use of the every method within the filter callback. Since filter specifically cares about the truthiness of the callback's return value, using a method that returns a boolean value works well. every will return true if the callback passed to it returns a truthy value for the array of keys. We're using `object[key][0] === key` to test whether all keys match the first letter of all their associated values. Note that the only object that meets this criterion is `{:c => 'cat', :d => 'dog'}`, and the return value is an array.

What would happen if, instead of using every, we used some? How would this affect the return value of filter?
