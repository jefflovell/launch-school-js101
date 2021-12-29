# 109 Written Exam Study Guide

## Canned Concept Definitions

### Variable Scope
The concept demonstrated here is **variable scope**:, in particular that inner (child) scopes **do have access** to outer (parent) scope variables but that outer (parent) scopes **do not have** access to inner (child) scope variables.

### Variable Shadowing
The concept demonstrated here **variable scope**: in particular **variable shadowing**, wherein a *local* (child scope) variable's name shadows a *global* (parent scope) variable of the **same name** thereby making the global variable *inaccessible* within the local scope.

### Strict and Loose Equality
The concept demonstrated here is **strict equality**: The **strict equality operator** checks whether its two operands are equal, returning a `Boolean` result.  It returns `true` when the operands have the same **type *and* value**, `false` otherwise. For an *object*, it will return true **ONLY** if both operands refer to the *same object*.

The concept demonstrated here is **loose equality**: The **loose equality operator** checks whether its two operands are equal, returning a `Boolean` result. Unlike the strict equality operator, if the operands are *different data types*, it will attempt to **coerce** *one or both* operands before comparison.  The rules are unintuitive: `string` is coerced to `number`, `boolean` is coerced to `number`, `object` is coerced to some `primitive` if compared to a `primitive`, and `undefined` == `null` evaluates to `true`.

### Pass by Value vs Pass by Reference
The concept demonstrated here is the difference between **pass-by-value** and **pass-by-reference**:

**Pass-by-value**: All **primitive values** (`string`, `number`, `boolean`, `undefined`, `null`, `bigInt`(ES2015), `symbol`(ES2015)) are passed and returned by *value*. This means that when **primitives** are passed to a function, the function receives a "copy" of the original value as an *argument* which is assigned to a new, *local* variable known as a **parameter**. The original value is therefore *distinctly separate* from the passed value and *cannot* be **mutated** by mutating the argument.

**Pass-by-reference**: Whenever **objects** are passed to or returned from a function (including arrays), the function receives a **reference (pointer)** to the object's *location in memory* as an argument, which in turn points to the object's property values in memory.  The orginal value and the passed value are *identical references to the **same object** in memory* and therefore the object's property values *can* be **mutated** by mutating the argument.

### Variables as Pointers (all objects):
The concept being demonstrated here is **variables as pointers**: Any objects (including arrays) are assigned to a variable's memory address *not as values*, but as **references (pointers)** to the object's location in memory; and the memory addresses which contain the values of the object's properties.

### Variables as Pointers (Const, Objects & Object.freeze())
The principle demonstrated here is the mutability of objects (**variables as pointers**):

Even when declared with `const`, objects can be **mutated** and properties reassigned unless `Object.freeze()` is used to freeze the object so that its properties *cannot be changed*. Variables which are assigned objects **do not** store a value, but instead store **pointers** to the object and its properties in memory.  While a constant ("variable") declared with `const` cannot be reassigned to point to another address in memory (this is an intrinsic property of `const` regardless of whether it was assigned to an object or a primitive) the additional addresses and values at those adddresses describing an object's properties *can* change. This is why it is possible to add, remove, or reassign property names and values of objects declared with `const` but *not possible* to change the object that `const` points to.

### Variables as Values (primitives):
All **primitive** data types in JavaScript (`string`, `number`, `boolean`, `undefined`, `null`, `bigInt`(ES2015), `symbol`(ES2015)) are known as 'atomic' or *indivisible* values and are therefore **immutable** (unchangeable). It is impossible to mutate a primitive because what is stored at the memory address of the variable is *the value itself* (with the exception of Strings, but they are treated as primitive by JavaScript).  All you can do is use the value in an expression or reassign the variable to hold an entirely new value.

### Implicit Return Values (function side effects):
The concept being demonstrated here is **implicit return values**: Functions always return *something* to the calling code (the **caller**).  Operations performed *inside* of a function that have an effect *outside* the function without being returned are known as **side-effects**.  If a function does not return a value explicitly, it will always return `undefined` to when passing control back to the caller.

## String Methods

***All string methods return new strings because strings are **primitive** types and therefore **immutable** values.***

### Search and Selection

- `string.prototype.includes()`: This method takes a substring as the argument and returns a **boolean** signifying whether that substring exists within the string that `includes` was called on. The search is case-sensitive.
  - `includes()` takes an optional, second argument which specifies the index at which to start the search.

- `string.prototype.charAt()`: This method takes an index value of the calling string as an argument and returns the character at that index.

- `string.prototype.charCodeAt()`: This method returns the Unicode code point or character code of the character at the index of the caller passed to it. If an index is not provided, `charCodeAt()` assumes the index is `0`.

### Transformations and Copies

- `string.prototype.concat()`: This method concatenates the string arguments to the calling string and returns a new string. If the arguments are not of the **type** `string`, they are converted to string values before concatenating. `concat` can take more than one string as arguments: `concat(str1, str2, ..., strN)`.

- `string.prototype.slice()`: This method extracts a section of a string and returns a new string, without modifying the original string. The `slice` method takes two optional arguments. The first argument specifies the index at which to start the extraction and the second argument specifies the index **BEFORE** which to end the extraction. The character at the ending index is not part of the returned substring.
  - Calling the `slice` method **without any arguments will return a copy** of the original string.
  - If the second argument to `slice` is omitted, all the characters from the start index to the end of the string are returned in the substring.
  - If the first argument is `>=` to the calling strings `length`, an empty string `''` is returned.
  - If the first argument is a negative number e.g. `-2`, the slice begins extraction from `caller.length + startIndex` i.e. `5 + -2` would begin at `caller[3]`.
  - If the second argument is a negative number, the slice will end **before** `caller.length + endIndex`.
  - If the second argument represents a position **before** the starting index, `slice()` will return an empty string `''`.

- `string.prototype.substring()`: This method takes a start index and an end index and returns a substring from the start of the index up to, but not including, the end index. `substring` does not mutate the caller and returns a new string.

- `string.prototype.trim()`: This method removes any amount of whitespace from both ends of the calling string including whitespace characters like `\t` and `\n` and returns the result as a new string.

- `string.prototype.trimStart()` and `string.prototype.trimEnd()`:  These methods remove whitespace from the beginning or end of the calling string, respectively.  Both return a new string.

- `string.prototype.toUpperCase()` and `string.prototype.toLowerCase()`: These methods both return a string identical to the caller but transformed to uppercase and lowercase respectively.

### Converting to Arrays

- `string.prototype.split()`: This method separates the calling string into multiple strings and returns them in the form of an array. What character or pattern is used to separate the string into elements depends on the argument you provide to `split()`.
  - When called without any arguments, returns an array with the string as its only element.
  - When called with an empty string as the argument, `split()` returns an array of all the characters in the string (with some exceptions).
  - When called with any other string as the argument, `split()` will separate the string using the argument as the **delimiter** character.

## Array Methods

### Destructive Methods

`array.prototype.pop()`: This method removes the **last** element from an array and returns that element. This method mutates the calling array.

`array.prototype.push()`: This method **adds** one or more elements to the **end** of an array and returns the length of the new array. This method mutates the calling array.

`array.prototype.shift()`: This method *removes* the **first** element from an array and returns the removed element. This method mutates the calling array.

`array.prototype.unshift()`: This method *adds* one or more elements to the **beginning** of an array and returns the length of the new array. This method mutates the calling array.

`array.prototype.sort()`: This method sorts the elements of an array in place (mutating the calling array) and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

`array.prototype.reverse()`: This method reverses an array in place. The first array element becomes the last, and the last array element becomes the first. This method mutates the calling array.

`array.prototype.splice()`: This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

### Non-destructive Methods

`array.prototype.concat`: This method returns a new array that contains a copy of the original array combined with additional elements supplied with the arguments. Since `concat` creates a copy of the original array and then mutates the copy, it leaves the original array intact.

`array.prototype.slice()`: This method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included) where `start` and `end` represent the index of items in that array. The original array will not be modified.

`array.prototype.find`: This method executes the callback function once for each index of the array until the callback function returns a truthy value. If so, `find` immediately returns the value of that element. Otherwise, `find` returns `undefined`.

`array.prototype.findIndex()`: This method returns the **index** of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `-1` is returned.

`array.prototype.indexOf()`: This method returns the first index at which a given element can be found in the array, or `-1` if it is not present.

### Iterators

`array.prototype.forEach()`: This method is called directly on an array and executes a callback function for each element in the calling array. `forEach()` can only cause side effects as it cannot pass an explicit return value and always returns `undefined`. `forEach()` always iterates through every iterable element of the caller.

`array.prototype.filter`: This method returns a new array that includes all elements from the calling array for which the callback returns a truthy value. If no elements return a truthy value, it returns an empty array. `filter` doesn't mutate the caller. `filter`'s callback function can accept 1, 2, or 3 elements: the element value, the element index, and the array it is operating on.

`array.prototype.map`: This method returns a new array populated with the return values of executing a callback function for each element of the calling array.

`array.prototype.some()`: This method executes a callbackFn once for each element in the calling array and compares the value passed in to a test condition. `some()` continues to test elements until finding a value that passes the test in which case the method **immediately** returns `true`. If no elements pass the test, `some()` returns `false`.

`array.prototype.every()`: This method executes a callback function once for each element in the calling array which contains a test condition. If any element passed to the callbackFn evaluates to false against the test, `every()` **immediately** returns `false`. Otherwise, it returns `true`.

## Practice Excercises

## Scope 1: What does this code do and why?

```js
let b = 2;

function test(a) {
  a = b;
  return a;
}

test(5);
console.log(b);
console.log(a);
```

### Answer:

Line 8 will **return** the number `2`.
Line 9 will **print** the number `2` to the console.
Line 10 will throw a `referenceError: a is not defined`.

The concept being demonstrated here is **variable scope**: in particular that inner (child) scopes **do have access** to outer (parent) scope variables but that outer (parent) scopes **do not have access** to inner (child) scope variables..  `b` is a global variable, and `a` is a parameter (local variable) of the function `test()`. So when `a` is reassigned the value of `b` on line 4, the function `test()` first looks for a local variable, then when it finds none, expands to the outer, global scope.  Since `b` is in the global scope, it can be used by both the function `test()` and the method `console.log()`.  However, when we attempt to access `a` on line 10 from a different function scope (`console.log()`), we are not able to see into the scope of the function `test()`, therefore a `referenceError` is thrown.

## Scope 2: What does this code do and why?
```js
let name = "John";

const greet = () => `Hi ${name}`;

let greeting = greet();

console.log(greeting);
```
### Answer:

Line 7 logs the value `Hi John`.

The concepts being demonstrated here are **variable scope**, **first class functions**, and **string interpolation** via a *template literal*.

We start by declaring a variable `name` and initializing it to the value `"John"`.  Next, the `const` greet is assigned an **arrow function expression** which takes no arguments and returns the string `"Hi ${name}"`.  This works because our arrow function body contains a **single expression**, which causes the *evaluation of that expression to become the **return value** of the function without requiring an **explicit return statement***. In that return statement `${name}` is a **template literal** which allows us to **interpolate a string value from a variable**.  We can access name because of **variable scoping rules**, in particular that inner (child) scopes have access to outer (parent) scope variables.  On line five, the invocation of `greet()` is assigned to the variable `greeting` which is possible because JavaScript functions are **first class citizens** which means they can be treated like any other value, including **assignment to variables**.  Therefore, when `greeting` is passed to `console.log()` on line 7, its value is an **invocation** of the arrow function, so the console prints the return value of the arrow function.
*/


## Scope 3: What does this code do and why?
```js
let dog = 'Bark';

function dogCall(dog) {
  dog = dog + dog;
}

dogCall(dog);
console.log(dog);
```

### Answer:

line 7 returns `undefined`.
line 8 logs `'Bark'`.

There are two primary concepts demonstrated here:

The first concept demonstrated is **Call-By-Value** or **Variables-as-Values**: All **primitive** data types in JavaScript (`string`, `number`, `boolean`, `undefined`, `null`, `bigInt`(ES2015), `symbol`(ES2015)) are **atomic** or *indivisible* values and are therefore **immutable** (unchangeable). It is impossible to mutate a primitive because what is stored at the memory address of the variable is *the value itself* (with the exception of Strings, but they are treated as primitive by JavaScript).  All you can do is use the value in an expression or reassign the variable to hold an entirely new value.

The second concept demonstrated is **variable scope**: in particular **variable shadowing**, wherein a *local* (child scope) variable's name shadows a *global* (parent scope) variable of the **same name** thereby making the global variable *inaccessible* within the local scope.

On line 1, `dog` is a global variable and assigned the value `'Bark'`.  When it is passed into the function `dogCall()` via the **parameter** `dog`, because strings are **primitive**, it is passed in by value and a 'copy' of the value is assigned to the function's local variable `dog` which is wholly independent of the value held by the global `dog`.  The function `dogCall()` doesn't actually cause any side-effects because of **variable shadowing**.  Since the parameter `dog` has the same name as the global variable but its value is primitive, the function can never access the value of the global variable `dog`.  The concatenation performed is simply updating the parameter's value.  When the function exits, its local variable and the concatenation reassignment that it performed are unloaded from memory. So the function simply exits and returns `undefined`.  Thus when `dog` is logged, it logs the global variable's value of `"Bark"`. The value of global `dog` was never updated by `dogCall()` because of the shadowing.

## Ref vs Val 1: What does this code do and why?
```js
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);
```

### Answer:
line 79 prints `'hi'`
line 80 prints `'hello'`

The concept being demonstrated here is **Pass-by-Reference**: When objects are passed to a function (including arrays), what the function receives as an argument is a **reference** to the object's location in memory, which in turn points to the object's property values in memory.  The orginal value and the passed value are therefore references to the **same object** and therefore the object's values can be mutated by mutating the argument.

When the function `bar` is declared on line 72, it takes two parameters, both of which are re-assigned to new values inside the body of the function.
We invoke the function `bar` on line 77 passing in the value of `foo`, an object, to `argument1`.  When `foo.a` is reassigned on line 73, because `foo` is an object, that value has been **passed by reference** meaning that the memory location of `foo.a` is what is passed, not the value `'hello'` itself.

However, the value of `qux`, which is passed into `argument2` is a string which is a `primitive` and is therefore **passed by value** i.e. a 'copy' of `'hello'` is passed to the function `bar` which is completely independent from the value held by `qux`.

This is why when logging `foo.a` the we find that `foo` has been mutated, with `foo.a`'s value being reassigned to `'hi`' but when logging `qux` the value is unchanged.

## Rev vs Val 2: What does this code do and why?
```js
const campus = { state: 'Boston', address: 'North Ave NW' };
campus.state = 'Georgia';
console.log(campus);

const location = Object.freeze({ state: 'CA', country: 'US' });
location.state = 'FL';
console.log(location);
```
### Answer:
Line 7 prints an object `{ state: 'Georgia', address: 'North Ave NW' }`.
Line 3 throws a `TypeError`.

The principle demonstrated here is the mutability of objects (variables as pointers):  even when declared with `const`, objects can be mutated and properties reassigned unless `Object.freeze()` is used to freeze the object so that its properties cannot be changed. Variables which are assigned objects **do not** store a value, but instead store **pointers** to the object and its properties in memory.  While a constant ("variable") declared with `const` cannot be reassigned to point to another address in memory (this is an intrinsic property of `const` regardless of whether it was assigned to an object or a primitive) the additional addresses and values at those adddresses describing an object's properties can change. This is why it is possible to add, remove, or reassign property names and values of objects declared with `const` but not possible to change the object that `const` points to.

Because the values being assigned to `campus` and `location` are both objects, they can still be read and written even though we are using `const` since what's being stored are references to the objects in memory, not the values themselves.  This is why on line 6, `campus.state` can be reassigned from `'Boston'` to `'Georgia'`. However when we pass the object on line 1 to the `Object` **static method** `freeze()`, we prevent JavaScript from being able to reassign any properties in that object even though it is a pointer, thus throwing a ```TypeError``.


## Ref vs Val 3: What does this code do and why?

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

### Answer:
The program returns undefined followed by printing the array of objects `hottestTemps`:

```js
undefined
[
  { continent: 'Africa', country: 'Tunisia', temp: 131 },
  { continent: 'Asia', country: 'Iran', temp: 129.2 },
  { continent: 'North America', country: 'USA', temp: 134.06 },
  { continent: 'South America', country: 'Argentina', temp: 120.02 },
  { continent: 'Europe', country: 'Greece', temp: 120.2 },
  { continent: 'Oceania', country: 'Australia', temp: 123.26 }
]
```

The first concept being demonstrated here is **implicit return values**: Functions always return *something*.  Operations performed *inside* of a function that have an effect *outside* the function without being returned are known as **side-effects**.  If a function does not return a value explicitly, it will always return `undefined`.

The second concept being demonstrated here is **variables as pointers**: Any objects (including arrays) are assigned to variables not as values at the variable's memory address but as references (pointers) to other memory addresses which contain the values of the object.

On line 130 when `hottestTempsInF` is assigned the expression `toFahrenheit(hottestTemps)` it would be natural to expect the value of `hottestTempsInF` to be a copy of the array passed to `toFahrenheit()` with the temps updated to Fahrenheit.  However, the function `toFahrenheit()` as declared on line 123 does not have a **return** statement, so the return value of this function assigned to the `const` `hottestTempsInF` is actually `undefined`.  Additionally, our input array is an array of **objects**. When we invoke `slice()` on line 123 of the function `toFarenheit()` to make a copy of the input array, we do create a new array, but that array is a **shallow copy**.  The objects referenced *inside the input array's elements are still shared with the original array*.  Therefore on line 130/131 when we would expect to print two different arrays because we assigned the expression `toFarhrenheit(hottestTemps)` to a new variable, what we find instead is that we have printed `undefined` and mutated the input array.
