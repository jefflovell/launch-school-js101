// Exam Tips

// write out concepts ahead of time.
// 3 big concepts in the 109 exam:
//  scope,
//  variable shadowing,
//  pass by reference vs pass by value

// Sample Written Problem

// Description
// Given a divisor and a bound, find the largest number N such that:
// N is divisible by the divisor
// N is less than or equal to the bound
// N is greater than 0.

// Test Cases
console.log(maxMultiple(2, 7) === 6);
console.log(maxMultiple(3, 10) === 9);
console.log(maxMultiple(7, 17) === 14);
console.log(maxMultiple(10, 50) === 50);
console.log(maxMultiple(37, 200) === 185);
console.log(maxMultiple(7, 100) === 98);

// Ben's Question

// What does this log and why?
let words = [["hunter", "spear"], ["gatherer", "sack"]];

function pluralize(array) {
  return array.map(words => {
    words[0] += "s";
    words[1] += "s";
    return words;
  });
}

console.log(pluralize(words));
console.log(words);

// 109 Exam Level Question

const greeting = "Hello!";
function change(greeting) {
  greeting = "Hi!";
  return greeting;
}

console.log(change());
console.log(greeting);

*variable shadowing*
*it works without throwing an error BECAUSE of the shadowing.  We never touch the const greeting.  Without the variable shadowing, this code would throw a TypeError*

// H's question
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);

// Variant

let name = ["Jane"];

function test(arr) {
  arr = arr.concat("Doe");
  return arr;
}

console.log(test(name));
console.log(name);