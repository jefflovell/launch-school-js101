/*
Write some pseudocode (both casual and formal) that does the following:
*/

//1) A function that returns the sum of two numbers

/*
---Casual---
Given a function that takes two numbers as parameters
Add the second number to the first number
Return the sum

---Formal---
START
# Given two numbers
SET parameter1 = num1
SET parameter2 = num2
PRINT (parameter1 + parameter2)
END
*/

function add(num1, num2){
  return (num1 + num2);
}

console.log(add(4, 5));

//2) A function that takes an array of strings, and returns a string that is all those strings concatenated together

/*
---Casual---
Given a function that takes an array of strings as a parameter
Iterate through each element of the array
 - save the first string as a starting value
 - add each new string to the value
return the saved string

---Formal---
START
# Given a function that takes an array of strings as a parameter
SET iterator = 0
SET builtString = ''
WHILE iterator < length of array of strings
  builtString = builtString + value of array of strings element at index 'iterator'
  iterator = iterator + 1
PRINT builtString
END
*/

function stringify(array) {
  let result = '';
  array.forEach( el => result += el);
  return result;
}

console.log(stringify(['a','e','i','o','u']));

//3) a function that takes an array of integers, and returns a new array with every other element

/*
---Casual---
Given a function that takes an array of integers
iterate through every other element of the array
  - save the first element to a new array as a starting value
  - add each element to the new array
return the new array

---Formal---
START
# Given a function that takes an array of integers as a parameter
SET iterator = 0
SET everyOther = []
WHILE iterator < length of integers array
  everyOther = everyOther + value of integers array element at index 'iterator'
  iterator = iterator + 2
PRINT everyOther
END
*/

function everyOther(intArray) {
  let result = [];
  for (let i = 0; i < intArray.length; i += 2) {
    result.push(intArray[i]);
  }
  return result;
}

console.log(everyOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

