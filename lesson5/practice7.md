### Practice 7 ###
***Given the following code, what will the final values of `a` and `b` be? Try to answer without running the code.***

```
let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;
```

***Answer:***
`a; => 4 // should be 2, a is never referenced after initialization`
`b; => [1, 8] // should be [3, 8] because of above, 5 - 2 = 3`

***LS Answer:***
```
a // => 2
b // => [ 3, 8 ]
```
*The value of a didn't change since we don't reference a at any point. The code arr[0] += 2 modifies the array arr, but not a. In effect, we are assigning a new object to that index of the array so that instead of arr[0] containing 2, the value obtained from a, it now contains 4. We can confirm that by examining the value of arr:*
`arr; // => [ 4, [ 3, 8 ] ]`
*Since b is an array and we are modifying that array by assigning a new value to index 0, the value of b does change.*