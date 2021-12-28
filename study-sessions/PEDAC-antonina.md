Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.

The input string can be assumed to contain only alphabets and numeric digits.

**Problem**
  Input: String
  Output: Number
  Rules:
    - case-insensitivity
    - alpha numeric
    - return the count of all characters that appear more than once
    - handle empty strings

**Examples / Test Cases**

```
console.log(duplicateCount("")); // == 0
console.log(duplicateCount("abcde")); // == 0
console.log(duplicateCount("abcdeaa")); // == 1
console.log(duplicateCount("abcdeaB")); // == 2
console.log(duplicateCount("Indivisibilities")); // == 2
```

**Data Structures**

Maybe:  Object with letters as keys and counts as values
Maybe:  Array + includes


function countMultiples(string) {
  -declare a variable to hold the count of each unique character 
  that occurs more than once and initialize it to 0;
  -declare a comparison array which we will push reviewed characters to after we have reviewed them
  -convert the string to lowercase to handle case-insensitivity
  -break the string into an array of characters // a, a, b, c, d, d
  -loop through the array
    - for each character, loop through the array again and compare the array to the current character as long as it isn't in the comparison array
      - if the character is encountered
        - iterate the count
        - push the character to the comparison array
  - return count
}

// i think i'm going to have to handle a double counting issue that i can't quite wrap my head around right now...

ALEX ALGO
-input: string
-create variable count and set value to 0
-create object `characters`

-iterate through string:
   -if object already includes char (lowercased) as a property, increment its value by 1
   -otherwise, add char as a property with a value of 1
-iterate through object values:
   -if value at current index is > 1, increment count by 1
return count

C

HyoSung's ALGORITHM
- input string
- initialize `count` to an empty object
- iterate through string char by char
  - add char to `count` object
  - if char exists in `count` object increment value of char by 1
- iterate through values in the object
- return number representing chars in `count` greater than 1


//Michael's Algo
//define function
//declare a conter to be initialized to 0
//declare an object so that we can store the amount of letters
//iterate through all the letters of the string and make them lowercase
//initialize the object to 0
  //incrment object by 1
//convert the object values to an array of values
  //iterate through that array
    //if the element is greater than 1; incrment the counter by 1
//return the counter


Jeff
function countMultiples(string) {

  -declare a variable to hold the total count of each unique character that appears more than once
  that occurs more than once and initialize it to 0;
  -declare a comparison array which we will push reviewed characters to after we have reviewed them
  -convert the string to lowercase to handle case-insensitivity
  -break the string into an array of characters // a, a, b, c, d, d
  -loop through the array
    - for each character, loop through the array again and compare the array to the current character as long as it isn't in the comparison array
      - if the character is encountered
        - iterate the count
        - push the character to the comparison array
  - return count

}

***This problem of counting characters screams for an object***

You could also use a Set, which will not allow duplicate characters, then you could compare the length of the original string to the length of the set and return the difference.

function countMultiples(string) {
  let uniqueChars = new Set(string);
  return string.length - uniqueChars.length;
}

function duplicateCount(string) {
  let counter = 0;
  let result = {};
  let lowerCaseString = string.toLowerCase()
  for(let i = 0; i < lowerCaseString.length; i++) {
    if(!result[(lowerCaseString[i])]){
          result[(lowerCaseString[i])] = 0
    }
    result[(lowerCaseString[i])]++
  }
    let arrayOfValues = Object.values(result);

    for(let i = 0; i < arrayOfValues.length; i++){
      if(arrayOfValues[i] > 1){
        counter += 1
      }
    }
  return counter;
}
