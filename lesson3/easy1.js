//Q1: Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// A1: No, the resulting array will be:  [1, 2, 3, , , , 5] (empty indexes !== undefined!!!)

let numbers2 = [1, 2, 3];
numbers2[6] = 5;
numbers2[4];  // what will this line return?

// A1B:  numbers[4] returns undefined (even though the index is empty)
// This is an important distinction:
//   -using map on an empty index returns an empty index to the output array.
//   -using map on an index with value undefined remaps the index based on the callback's return value.

// Q2: How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

// A2: There are several ways:

function endsWithBang(string) {
  let lastChar = string[string.length - 1];
  if (lastChar === '!') {
    return true;
  }
  return false;
}

endsWithBang(str1); // true
endsWithBang(str2); // false

// OR

str1.endsWith("!"); // true
str2.endsWith("!"); // false

// Q3: Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// Note that our keys have capitalized names; this usually violates style guidelines, but is fine for our purposes. We'll use such keys in several exercises in this course.

// A3:

console.log(ages.hasOwnProperty('Spot'));

// Q4: Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

munstersDescription = munstersDescription.charAt(0) +
  munstersDescription.substring(1).toLowerCase();

console.log(munstersDescription);

//Q5: What will the following code output?

console.log(false == '0');
console.log(false === '0');

/*
line 1 outputs true
the console is going to log the output of an expression with Boolean false and String zero as operands.
the expression is a comparison using the loose equality operator, which will use implicit type coercion to cast string zero to a boolean value, then test whether the value of both operands are equivalent.  it will cast string zero to number 0 and since number 0 is a 'falsy' value, false == 0 will output true and console.log will write it to console.

line 2 outputs false
everything works the same as line 1 except that === or 'strict equivalency' checks for both value and type.  since string 0's type is string and boolean false's type is boolean, line 2 will output false and print it to console.
*/

// Q6: We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };
