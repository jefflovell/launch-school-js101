// Aug 31, 2021 - Antonina

// 109 Study Guide
  -declarations, initialization, assignment, and re-assignment
  -variable scope, especially how variables interact with function definitions and blocks
  -primitive values, objects, and type coercions
  -object properties
  -mutability vs. immutability vs. const
  -loose and strict equality
  -passing arguments into and return values out of functions
  -working with Strings
  -working with Arrays, especially the iteration methods (forEach, map, filter, and find)
  -working with Objects; accessing keys and values of an Object as arrays
  -arrays are objects
  -understand the concepts of pass-by-reference and pass-by-value
variables as pointers
console.log vs. return
truthiness vs. boolean
function definition and invocation
function declarations, function expressions, and arrow functions
implicit return value of function invocations
first-class functions
side-effects
naming conventions (legal vs idiomatic)
be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose.


// Question 15 - Kris

let family = {
  john: 54,
  mary: 50,
  zoe: 12,
};

function incrementAge(people) {
  return Object.values(people).map((age) => (age += 1));
}

console.log(incrementAge(family)); // => [ 55, 51, 13 ]
console.log(family); // => { john: 54, mary: 50, zoe: 12 }

// Question 1 - H

let name = ["Jane"];

function test(arr) {
  arr = arr.concat("Doe");
  return arr;
}

console.log(test(name));
console.log(name);

// Question 3 - Ainaa

// [1, 2, undefined, {1:2}, <2 empty items>, null, '-1': 2]
// This array is illegal (cannot be assigned as written)

array.length; // What will this line return and why?

// Question 7 - Jeff

let animal = "dog";

const speak = animal => {
  if (animal) {
    console.log("Bark");
  } else {
    console.log("Meow");
  }
};

speak();

// Question 9 - Kris

console.log(['ant', 'bear'].map(elem => {
  if (elem.length > 3) { return elem; }
}));

// Question 11 - H

let name = "nina";

function outer() {
  let name = "jill";

  function inner() {
    return name[0].toUpperCase() + name.slice(1);
  }

  return inner();
}

outer();
console.log(name);

// Question 16 - Ainaa

//What is the difference between the terms `identifier` and `variable name`?
//How many variable names are there in this code snippet?
let character = "Tamara";
const elements = ["earth", "water", "fire", "air"];

function associateCharElement(char, el) {
  return {name: char, element: el};
}

tamara = associateCharElement(character, elements[1]);

// Question 5 - Jeff

function test(str) {
  str + "!!!";
}

let word = test("Hello");

if (word) {
  console.log("Hi");
} else {
  console.log("Goodbye");
}


