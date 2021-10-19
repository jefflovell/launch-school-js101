### Practice 1 ###

How would you order the following array of number strings by descending numeric value (largest number value to smallest)?

```
let arr = ['10', '11', '9', '7', '8'];

let sorted = arr.map(stringNum => parseInt(stringNum, 10))
                .sort((a, b) => b - a)
                .map(num => num.toString());

console.log(sorted);
```

***LS Answer:***

```
arr.sort((a, b) => Number(b) - Number(a)); // [ '11', '10', '9', '8', '7' ]
```

*The key here is understanding that strings are compared character by character, so 11 is less than 7. To compare the strings as numbers, we need to convert them to numbers within the callback.*

*The second part of solving this problem is sorting the array in reverse order. To do this, we need the callback to return a positive number when b is greater than a, negative if it is less than a. Thus, we subtract the numeric value of a from the numeric value of b.*

*Note that the same solution without the use of Number() would produce the same result:*

```
arr.sort((a, b) => b - a); // [ '11', '10', '9', '8', '7' ]
```

*This might seem strange. Didn't we just say we needed to convert the strings to numbers? Well in this case too the strings are being converted to numbers, except this time they're being implictly coerced through the use of the subtraction operator (-). Subtraction implicitly coerces both strings into a number and returns a number. However, it's better to be explicit in your code. Relying on implicit coercion can result in a lack of clarity and lead to subtle bugs.*
