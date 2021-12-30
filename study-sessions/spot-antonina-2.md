## Question 24 - Edward
### What are the three ways to define a function in JS? Give an example for each.

* Function Declaration
  * Declarations are hoisted
* Function Expression
  * Can be named or unnamed (anonymous)
  * Expressions cannot be hoisted
* Arrow Function
  * Are always anonymouse
  * Are an instance of function expression
  * Have an implicit return value if the function body is excluded

* Hoisting:
  * a declaration is hoisted, meaning it can be referenced in code before being declared
  * an expression is not hoisted so it must be defined

## Question 21 - Jeff
### When do we say that a function has side effects? Give an example to demonstrate it.

function greeting () {
 console.log('Hi');
}

// undefined

function sum (a,b) {
  console.log(a+b); //side effect
  return a+b;
}

* There are 5 side effects:
  * accessing external interfaces (obtaining user input or logging to the console)
  * mutating objects in outer scopes
  * reassignment of a variable in an outer scope
  * raises an exception without handling
  * calls another function that causes a side effect

## Question 7 - Edris
### What is happening in the following code? What concepts are being demonstrated here?

let animal = "dog";

const speak = animal => {
  if (animal) {
    console.log("Bark");
  } else {
    console.log("Meow");
  }
};

speak();

* variable shadowing
* arrow functions

## Question 11 - HyoSung
### What is happening in the following code?  What concepts are being demonstrated here?

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

* variable shadowing
* immutability of strings (primitives)

## Question 3 - Lucas
### What is returned and why?

// [1, 2, undefined, {1:2}, <2 empty items>, null, '-1': 2]
array.length; // What will this line return and why?

7 because '-1' is an object property that is not enumerable so the length is 7.

## Question 35 - Group effort / Elaine (Marcos hasn't covered)
### What do we mean when we say that functions in JS are first-class values?
### Give an example that demonstrates that.

Functions can be:
* passed
* returned
* assigned to variables

All 'first class' values can be assigned to variables, passed, and returned.  Functions in Javascript are first-class as are all primitives and objects.

## Question 30 - Marcos Describe the difference between the array `map` and the `filter` method.
### When would you use each?

* Map:  Transformation
  * If we want to transform each element of an input array and output to a new array.
* Filter: Selection
  * If we want to select certain values from an input array and output to a new array.
* Both return arrays
* Both are array methods

## Question 28 - Ainaa
### Give an example of explicit and one of implicit type coercion.

Explicit: When we intentionally use coersion via an in-built constructor or method such as `Number()` or `parseInt()`.

Implicit: When a value is cast automatically by javascript (possibly against our intent) such as happens with the `+` operator such as `5 + 'five'` returning `'5five'` or `'5' + 5` returning `'55'`.

***Implicit type coercion rules are not always intuitive and there are a lot of them, so it's best to avoid using it if possible***

## Question 2 - Elaine
### Explain the concept of pass-by-reference and give an example to demonstrate it.

//Explain the concept of pass-by-reference and give an example to demonstrate it.


/* Pass by Reference
Is when we pass an argument to a function, and the argument is a variable that stores a reference/pointer to an object in memory. When we pass by reference, since we are passing the ACTUAL POINTER, IF our function MUTATES the variable, it has a permanent or persistent on the object itself. */

let arr = [1, 2, 3];

function mutateThis(array) {
  array.push(5);
}

console.log(arr);

mutateThis(arr);

console.log(arr);

## Question 6 - Michael
### What does the last line output and why?  What concepts are being described here?

let firstName = "John";

const getName = name => {
  name.concat(" Doe");
  name = name.toLowerCase();
  return name;
}

getName(firstName);
console.log(firstName);

* last line logs 'John'
* Arrow functions
* Scoping
* Pass by reference vs pass by value.  Strings are primitives and not passed by reference