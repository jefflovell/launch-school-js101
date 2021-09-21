/*
Solve the Problem on the logical level first.

=========================
Understanding the Problem
=========================

Goal: understand what you're being asked to do.

Establish the rules & boundaries of the problem?
What are the implicit and explicit requirements?
Ask clarifying questions.
Make note of any questions you hope to answer by examining the test cases in the next step.

rules:
- the output needs to be sorted in x order
- input will always be positive number

=======================
Examples and test cases
=======================

Goal: understand more about what you're being asked to do.

We should use our examination of the test cases to confirm or refute our assumptions of the problem.
A good way to see the rules/boundaries in actions.
If the return value is an array-- take a look at the order of elements.
If problem involves strings-- should we treat strings in a case-insensitive manner?
What about empty arguments?
Walk through all test cases with your understanding of the problem and see if they confirm your understanding.
May need/want to write some of your own test cases.

================
Data structures
================

Goal: begin to think logically and solution-based about the problem.

How we structure our data is closely related to our algorithm and the steps we may take to solve the problem.
Helps us to reason with our data more logically.
What does our data look like when we get it? (input)
What does our data look like when we return it? (output)
What does our data need to look like in between (intermediary steps)?

================
Algorithm
================

Goal: write out high-level steps to solve the given problem.

A logical sequence of steps for accomplishing a task or objective.
Be abstract and high-level (don't box yourself in to a specific implementation, for example).
Language-agnostic.  Your algorithm should be applicable no matter what language someone is using to code a solution.
Find a solution that works (don't worry about efficiency for now)
Can create substeps for different parts
Separate concerns can potentially be moved into a helper function.
You can (and should) return to your algorithm during the implementation stage to update.
Although you want to keep your algorithm high-level in that you don't want your algorithm to be code-specific, you should take care not to skip over necessary steps in the problem solving process.  For example, if a step in your algorithm is 'determine if number is prime'.  There should be sub-steps there walking through how you would determine if the number is prime.

==================
Coding with intent
==================

Goal: translate the algorithm into your programming language of choice.

Now is the time to use pseudo-code (if you want) to act as a step in between the algorithm and the actual code.
The goal of pseudo-code at this point would be to explore the solution in the domain of code.  An intermediary step of translating your written algorithm into the final code solution.
Follow along with your algorithm step by step and code the solution.
Run your code often to confirm your code is working as you expect.
The key is to be in control the whole time.  Code with intention and avoid hack and slash.
If you find your algorithm does not work (logical flaw), return to the algorithm step FIRST and THEN continue on with your code.  Don't push through and resort to hack and slash.
Good programmers often spend the least amount of time on the coding step, because they figured everything out in the other PEDA steps.
As your language fluency increases, the C step of PEDAC will go more quickly.

*/

// The Problem

/*
Implement a function that calculates the sum of numbers inside of a string.
Example: "L12aun3ch Sch3oo45l"

You can expect that the string will include only positive numbers.

input:
- a string

output:
- a number (sum of all numbers in the input string)

rules:
- input string only contains positive numbers
- we don't need to worry about special characters nor case sensitivity
- consecutive digits represent a large number

data structures
- string
- array of numbers
- number

algorithm:

//main loop

start loop over the input string and check whether the character is a number
  - if there are multiple numbers in a row, add them together first
  - push the number character into a results array into a results array
end of loop

(subroutine) identify multi-digit numbers
(subroutine) add all the numbers of the results array together

// handling multi-digit numbers

// adding numbers of results array
  start loop through numbers array
  add each element to a result variable
  return the result variable

//HOW TO ACTUALLY IMPLEMENT THIS

- isNumber = false
- currentNum = 0

- check if char is digit?
  - if so:
    - isNumber is true:
      - currentNum = currentNum * 10 + current char
    - isNumber is false:
      - currentNum = current char (converted to a number)
  - if not a digit:
    - isNumber = false
    - push currentNum to numbers array
    - currentNum = 0

*/

console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);

// JULIETTE'S SOLUTION

/*
- initialize a numbers array
- split the string into array of characters
- iterate over the chars:
  - ['2', '0', ''-', '1', '-' ]
  - join the array => "20-1-""
  - split the array based on '-' => ["20", "1"]
- convert the array of strings into an array of numbers
- sum these numbers and return the result
*/


function sumOfNumbers(str) {
  let chars = str.split('');

  let delim = '-';
  let numbersChar = '0123456789';

  let nums = chars.map( char => {
    if (numbersChar.includes(char)) {
      return char;
    } else {
      return delim;
    }

  });

  let numbers = nums.join('').split(delim).map(str => Number(str))

  let result = numbers.reduce((sum, num) => sum + num)
  console.log(result)
  return result;
}

console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
// 2 + 3 + 1 + 5

console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);
console.log(sumOfNumbers("") === 0);

//FLEX

str.match(/\d+/g)
[
  '30', '20',   '10',
  '0',  '1203', '914',
  '3',  '1349', '102',
  '4'
]