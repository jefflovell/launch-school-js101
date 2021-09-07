/*
Agenda
- Introductions
- Study Tips
- Variable Scope
- Variable Shadowing
- Pass-by-value, Pass-by-reference
- Pseudo-code


Variable Scope
- determines where the variable is available in a program
- where you declare a variable
- let a = 10
- Outer blocks cannot access variables from inner scopes.
- Inner blocks can access variables from outer scopes.
- Variables defined in an inner block can shadow variables from outer scopes.
*/


// Question 1
let a = 'Hello';

if (true) {
  console.log(a);
}
// what will happen when we run this code?

// Question 2
if (true) {
  let a = 'Hello';
}

console.log(a);
// what will happen when we run this code?

// Question 3
let a = 'Hello';

if (true) {
  a = 'Goodbye';
}

console.log(a);
// what will happen when we run this code?

// Question 4
let a = 'Hello';

if (true) {
  let a = 'Goodbye';
  // cannot access global `a`
}

console.log(a);
// what will happen when we run this code?

/*
Pass-by-value
- Passing an argument into a function
- That argument is a *primitive* type
- The parameter in the function, points to a new copy of the value


Pass-by-reference
- Passing an argument into a function
- That arugment is a *object* type -- {} object, Array, and Arrays are also objects
- The function can *change/modify/mutate* the arugment that is passed because we have a *reference* to that original argument
*/

// Question 1
let a = 'Hello';

function changeValue(a) {
  a = 'Goodbye';
}

changeValue(a);
console.log(a);
// What will happen when we run this code?


// Question 2
let a = ['Hello'];

function changeValue(a) {
  a[0] = 'Goodbye';
}

changeValue(a);
console.log(a);
// What will happen when we run this code?