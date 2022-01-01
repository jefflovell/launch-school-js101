## Whiteboard Interview Question

//1
// The maximum sum subarray problem consists in finding the maximum sum
// of a contiguous subsequence in an array of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
//-- should be 6: [4, -1, 2, 1]
// If the array is made up of only negative numbers, return 0 instead.
// An empty array is considered to have zero greatest sum.
// Note that the empty array is also a valid argument array.

// Test Cases
console.log(maxSequence([]) === 0); // true 
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
console.log(maxSequence([11]) === 11); // true
console.log(maxSequence([-32]) === 0); // true
console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

//2
//Problem Description
// Given the string of alphabetic characters limited to a-z, do as in the sample cases.

// Each character in the string argument should appear in the returned string.
// The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)
// The repeated sequences of a character should be separated by a hyphen in the returned string.
// In the repeated sequences of a character included in the returned string, the first instance of the character should be upper-case.  Subsequent instances of the character should be lowercase.

// Test Cases
console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"

### What are the primitive values in JS?

- String
- Number
- undefined
- null
- Boolean

let num = 5;
let five = num;

[alex]What concepts does this demonstrate:  Immutability, primitive values

using the compareFn callback in sort:
*** The compare function is much more flexible than just numbers, numbers are just a common use case ***
ascending numerical sort:

if positive : a is > b and sorted after b
if negative : a < b and sorted before b
if zero: the two current values are already in the correct order and move on

descending numerical sort:

the opposite of ascending

### What is the output of lines 8 and 9
```js
let greeting = "Hello";

const test = str => {
  str = str.concat(" World!");
  return str;
}

test(greeting);
console.log(greeting);
```

concepts:  pass by value and WHY? because strings.  because primitive.