# PEDAC - Advanced Problems | Antonina Dec 29
## Jeff, Adhitiani, HyoSung, Brian, Gianni

## The PEDAC Process

### (Understand the) Problem
  - Inputs & Outputs => Explicit rules and boundaries stated in the problem.
  - Collect / ask questions (implicit rule discovery)

### Examples & Test Cases
  - Understand any provided test cases
  - Write any additional test cases as required
  - Include any edge cases, follow up on open questions or implicit requirements

### Data Structures
  - Determine what data structures might be useful
    - Input & Output
    - Any required data structures for our problem solving approach

### Algorithm
  - Break down the steps to solve the problem
  - Try to use delcarative pseudocode if possible to not pigeonhole yourself into an implementation
  - If the algorithm is logical, it becomes easier to code

### Code (with Intent)
  - It's important to have an idea of what you're trying to do and not code blindly
  - We're aiming to just translate a working algorithm into code, not code an algorithm on the fly
  - Take frequent breaks to test your code as you go along. This is incredibly important in an interview setting

## Exercise 1

```js
// The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
// The result array should be sorted in ascending order of values.
// Assume there are no duplicate numbers in the array.
// The order of the numbers in the input array should not matter.

console.log(differenceOfTwo([1, 2, 3, 4])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7])); //  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6])); // [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4])); // [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13])); // []

```
## Problem
  ### Input: An array of numbers
  ### Output:  Since we want 'pairs of numbers with a difference of 2' maybe a nested array? 

  ### Questions:

  - Can we assume that the input will ONLY contain numbers?
  - Are there negative numbers?
  - Can we assume 'integers only'? (no floats or other number weirdness)
  - If we're sorting pairs, is it the pairs that should be sorted?  or the array of pairs? and on which values? - Maybe not important if numbers are 'unique'

  ### Rules/Assumptions:

  - Input is order-independent
  - Numbers will be unique (input & output)
  - Output Sort order is numerically ascending (order dependent)
  - Numbers that don't have a difference of two with any other number from the input array are ignored
  - If no numbers have a difference of two, return an empty array
  - Each pair should be sorted as well as the outer output array
  - A number might appear in two pairs
  - Even if we only have 1 pair, we should return a nested array

## Examples

## Data Structures

  - Arrays
  - Array Sort
  - Some sort of iterator
  - A nested array for results
  - Some selection method
    - Preferably non-destructive (slice) OR
    - Create a copy of the input to use
      - push, pop, shift, unshift etc.

## Algorithm

function twoApartPairs( flatArrayOfNums ) {

- Create a results array
- Start by sorting the array of numbers in acending order to allow us to determine whether adjacent numbers are 2 apart.
- Iterate over the array AND
  - Iterate over the array comparing the currentElement to the nextElement of the array
    - If (nextElement - currentElement == 2)
      - Add both elements to an array
      - Add the array to a results array
- Return the results array

***Note:*** For hard problems, it's worth breaking down a test case against your algorithm.

}

```js
// The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
// The result array should be sorted in ascending order of values.
// Assume there are no duplicate numbers in the array.
// The order of the numbers in the input array should not matter.

console.log(differenceOfTwo([1, 2, 3, 4])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3])); // [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7])); //  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6])); // [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4])); // [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13])); // []

/*
Antonina's Algorithm:
  -declare a `result` array
  -sort the input array
  -for each number in the array
    -loop over the rest of the array
      -if the difference between that number and the current number is 2
        -create an array of the two numbers and push it in `result`
*/

function differenceOfTwo(nums) {
  let sortedNums = nums.slice().sort((a, b) => a - b);
  let result = [];

  sortedNums.forEach((num, idx) => {
    sortedNums.slice(idx).forEach(nextNum => {
      if (nextNum - num === 2) result.push([num, nextNum]);
    });
  });

  return result;
}
```

