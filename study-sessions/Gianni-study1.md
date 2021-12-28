#DEC 22 STUDY SESSION - GIANNI, JEFF

## Is there an implementation difference between these two functions
*** Jeff ***

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;

*func1 uses push so buffer is mutated.  func2 uses concat so buffer is not mutated*

## What does the last line output and why?  What concepts are being described here?
*** Gianni ***

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
* Pass by reference vs pass by value.

On the second to last line, we call the `getName()` function passing the value of `firstName` as an argument to the parameter `name`.  Some transformations are performed on the value assigned to `name` and it is then returned from the function.  Because the value passed in to name is a primitive (a string), the value of `name` is a new value, not a reference to the value of `firstName`.  This is always the case with any string methods or operations as well, and more broadly, with any primitive values.  Therefore when we call `console.log()` on the last line, passing in the value of `firstName`, it has not changed and prints `John`, the same value to which it was initialized.

## Does invoking the function, passing in `munsters` mutate the caller?  Yes or no, and why?
*** Jeff ***
```js
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);
```
### What is returned and why?
*** Gianni ***
```js
// [1, 2, undefined, {1:2}, <2 empty items>, null, '-1': 2]
array.length; // What will this line return and why?
```
7 because '-1' is an object property that is not enumerable so the length is 7.

### What does this return and why?
*** Jeff ***
```js
//What does the following code output

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
```
### What does this return and why?
*** Gianni ***
```
const greeting = "Hello!";
function change(greeting) {
  greeting = "Hi!";
  return greeting;
}

console.log(change());
console.log(greeting);
```

*variable shadowing*
*it works without throwing an error BECAUSE of the shadowing.  We never touch the const greeting.  Without the variable shadowing, this code would throw a TypeError*