***Interview Questions***

// Problem Description
// Given an array of strings, return a boolean indicating whether
// at least three of the elements in the array have digits whose sum is
// divisible by 3.

// Elements of the argument array will be strings containing only string digits 0-9.

// For example:
// In the array ['35', '01110', '126', '57', '13'],
// the sum of the digits of each element will be: [8, 3, 9, 12, 4]
// from the resulting sums, there are 3 that are evenly divisible by 3: [3, 9, 12]
// so our function would return true.  See the below test cases for more examples.


// Test Cases
console.log(threeByThree(['01112', '0111', '00030', '2043', '12043']));
// true
console.log(threeByThree(['01112', '2043', '12043']));
// false
console.log(threeByThree(['01112', '2043']));
// false
console.log(threeByThree(['93', '9', '1', '25', '1212']));
// true


//2
// You are going to be given an array of integers.
// Your job is to take that array and find an index N where the sum
// of the integers to the left of N is equal to the sum of the integers to the right of N.
// If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array [1, 2, 3, 4, 3, 2, 1]:
// Your function will return the index 3, because at the 3rd position of the array,
// the sum of left side of the index [1, 2, 3] and the sum of the
// right side of the index [3, 2, 1] both equal 6.

// Another one:
// You are given the array [20, 10, -80, 10, 10, 15, 35]
// At index 0 the left side is []
// The right side is [10, -80, 10, 10, 15, 35]
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

//Test Cases
console.log(findEvenIndex([1,2,3,4,3,2,1]) === 3); // true
console.log(findEvenIndex([1,100,50,-51,1,1]) === 1); // true
console.log(findEvenIndex([1,2,3,4,5,6]) === -1); // true
console.log(findEvenIndex([20,10,30,10,10,15,35]) === 3); // true
console.log(findEvenIndex([20,10,-80,10,10,15,35]) === 0); // true
console.log(findEvenIndex([10,-80,10,10,15,35,20]) === 6); // true
console.log(findEvenIndex([-1,-2,-3,-4,-3,-2,-1]) === 3); // true

***End of Interview Questions***

***Written Exam***

Define the forEach array method in detail

Define the find array method in detail



```js
//What is the output? What concept is demonstrated?
let animal = "dog";

const speak = animal => {
  if (animal) {
    console.log("Bark");
  } else {
    console.log("Meow");
  }
}

speak();
```

***
  Alex
The code will log "Meow". It demonstrates variable shadowing as well as the fact that if you don't pass an argument when you invoke a function that has a parameter, the parameter is initialized as having the value `undefined`. Since the `speak` function is defined with the parameter `animal`, this shadows or makes inaccessible the global variable of the same name. When the function is invoked without an argument, this sets the local variable `animal` to the value of undefined. Since undefined is a falsy value, the if statement executes its else branch, logging "Meow" to the console.
***

On line 1, the variable animal is declared and initialized to the string 'dog'.

On line 3, a constant 'speak' is declared and assigned to an arrow function.

The arrow function has 1 parameter 'animal'.
If the argument passed to the parameter 'animal' is 'truthy', the string 'Bark' will be logged. Otherwise the string 'Meow' will be logged.

This arrow function returns undefined because it's a multi-statement expression with no explicit return value.

When speak is invoked, the string 'Bark' will be logged.

This demonstrates the concept of first class functions by showing that we can treat functions as values and assign them to variables.

This also demonstrates arrow function syntax, passing arguments, and implicit vs explicit return values.

This also demonstrates the difference between function definitions and invocations.


### What is printed on lines 18 and 19 and why
```js
const hottestTemps = [
  {continent : "Africa", country: "Tunisia", temp: 55},
  {continent : "Asia", country: "Iran", temp : 54},
  {continent : "North America", country: "USA", temp : 56.7},
  {continent : "South America", country: "Argentina", temp: 48.9},
  {continent : "Europe", country: "Greece", temp : 49},
  {continent : "Oceania", country: "Australia", temp : 50.7}
];

function toFahrenheit(tempsArr) {
  let newTempsArr = tempsArr.slice();
  newTempsArr.forEach(obj => {
    obj.temp = (obj.temp * 9 / 5) + 32;
  });
}

const hottestTempsInF = toFahrenheit(hottestTemps);
console.log(hottestTempsInF);
console.log(hottestTemps);
```

*pass by reference*
*shallow copies*
*function side effects*
*implicit return values*



let b = 2;

function test(a) {
  a = b;
  return a;
}

test(5);
console.log(b);
console.log(a);

*scope*
*reference errors*
*reassignment*

const emphasize = (str) => { str + "!!!" };

let word = emphasize("Hello");

if (word) {
  console.log(word);
} else {
  console.log("Goodbye");
}

***curly braces with the single expression function body prevents the return value***