# 109 Group Study: Alex, Jeff, Daniel, Shane

## Canned Definitions

### Variable Scope
The concept demonstrated here is **variable scope**:, in particular that inner (child) scopes **have** access to outer (parent) scope variables but that outer (parent) scopes **do not have** access to inner (child) scope variables.

### Variable Shadowing
The concept demonstrated here **variable scope**: in particular **variable shadowing**, wherein a *local* (child scope) variable's name shadows a *global* (parent scope) variable of the **same name** thereby making the global variable *inaccessible* within the local scope.

### Pass by Value vs Pass by Reference
It demonstrates the difference between **pass-by-value** and **pass-by-reference**:

**Pass-by-value**: All *primitive* values (`string`, `number`, `boolean`, `undefined`, `null`, `bigInt`(ES2015), `symbol`(ES2015)) are passed and returned by *value*. This means that when **primitive** values are passed to a function, the function receives a "copy" of the original value as an argument which is assigned to a local variable known as a **parameter**. The original value is therefore distinctly separate from the passed value and cannot be **mutated** by mutating the argument.

**Pass-by-reference**: Whenever **objects** are passed to or returned from a function (including arrays), the function receives a **reference** to the object's location in memory as an argument, which in turn points to the object's property values in memory.  The orginal value and the passed value are references to the **same object** and therefore the object's values *can* be **mutated** by mutating the argument.

### Variables as Pointers (all objects):
The concept being demonstrated here is **variables as pointers**: Any objects (including arrays) are stored *not as values* at the variable's memory address but as a **reference** (pointer) to the object's location in memory and in turn, memory addresses which contain the values of the object.

### Variables as Pointers (Const, Objects & Object.freeze())
The principle demonstrated here is the mutability of objects (**variables as pointers**):

Even when declared with `const`, objects can be **mutated** and properties reassigned unless `Object.freeze()` is used to freeze the object so that its properties *cannot be changed*. Variables which are assigned objects **do not** store a value, but instead store **pointers** to the object and its properties in memory.  While a constant ("variable") declared with `const` cannot be reassigned to point to another address in memory (this is an intrinsic property of `const` regardless of whether it was assigned to an object or a primitive) the additional addresses and values at those adddresses describing an object's properties *can* change. This is why it is possible to add, remove, or reassign property names and values of objects declared with `const` but *not possible* to change the object that `const` points to.

### Variables as Values (primitives):
All **primitive** data types in JavaScript (string, number, boolean, undefined, null, bigInt(ES2015), symbol(ES2015)) are known as 'atomic' or *indivisible* values and are therefore **immutable** (unchangeable). It is impossible to mutate a primitive because what is stored at the memory address of the variable is *the value itself* (with the exception of Strings, but they are treated as primitive by JavaScript).  All you can do is use the value in an expression or reassign the variable to hold an entirely new value.

### Implicit Return Values (function side effects):
The concept being demonstrated here is **implicit return values**: Functions always return *something*.  Operations performed *inside* of a function that have an effect *outside* the function without being returned are known as **side-effects**.  If a function does not return a value explicitly, it will always return `undefined`.

## Variable Scope, Variable Shadowing Exercises

## What does this code do and why?

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

## What does this code do and why?
```js
let name = "John";                  // line 1

const greet = () => `Hi ${name}`;   // line 3

let greeting = greet();             // line 5

console.log(greeting);              // line 7
```
### Answer:

Line 7 logs the value `Hi John`.

The concepts being demonstrated here are **variable scope**, **first class functions**, and **string interpolation** via a *template literal*.

We start by declaring a variable `name` and initializing it to the value `"John"`.  Next, the `const` greet is assigned an **arrow function expression** which takes no arguments and returns the string `"Hi ${name}"`.  This works because our arrow function body contains a **single expression**, which causes the *evaluation of that expression to become the **return value** of the function without requiring an **explicit return statement***. In that return statement `${name}` is a **template literal** which allows us to **interpolate a string value from a variable**.  We can access name because of **variable scoping rules**, in particular that inner (child) scopes have access to outer (parent) scope variables.  On line five, the invocation of `greet()` is assigned to the variable `greeting` which is possible because JavaScript functions are **first class citizens** which means they can be treated like any other value, including **assignment to variables**.  Therefore, when `greeting` is passed to `console.log()` on line 7, its value is an **invocation** of the arrow function, so the console prints the return value of the arrow function.
*/


## What does this code do and why?
```js
let dog = 'Bark'; // line 1

function dogCall(dog) { // line 3
  dog = dog + dog;
}

dogCall(dog); // line 7
console.log(dog); //  line 8 => Bark
```

### Answer:

line 7 returns `undefined`.
line 8 logs `'Bark'`.

There are two primary concepts demonstrated here:

The first concept demonstrated is **Call-By-Value** or **Variables-as-Values**: All **primitive** data types in JavaScript (`string`, `number`, `boolean`, `undefined`, `null`, `bigInt`(ES2015), `symbol`(ES2015)) are **atomic** or *indivisible* values and are therefore **immutable** (unchangeable). It is impossible to mutate a primitive because what is stored at the memory address of the variable is *the value itself* (with the exception of Strings, but they are treated as primitive by JavaScript).  All you can do is use the value in an expression or reassign the variable to hold an entirely new value.

The second concept demonstrated is **variable scope**: in particular **variable shadowing**, wherein a *local* (child scope) variable's name shadows a *global* (parent scope) variable of the **same name** thereby making the global variable *inaccessible* within the local scope.

On line 1, `dog` is a global variable and assigned the value `'Bark'`.  When it is passed into the function `dogCall()` via the **parameter** `dog`, because strings are **primitive**, it is passed in by value and a 'copy' of the value is assigned to the function's local variable `dog` which is wholly independent of the value held by the global `dog`.  The function `dogCall()` doesn't actually cause any side-effects because of **variable shadowing**.  Since the parameter `dog` has the same name as the global variable but its value is primitive, the function can never access the value of the global variable `dog`.  The concatenation performed is simply updating the parameter's value.  When the function exits, its local variable and the concatenation reassignment that it performed are unloaded from memory. So the function simply exits and returns `undefined`.  Thus when `dog` is logged, it logs the global variable's value of `"Bark"`. The value of global `dog` was never updated by `dogCall()` because of the shadowing.

## Pass-by-value, Pass-by-reference, Variables-as-values, Variables-as-references Exercises

## What does this code do and why?
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

console.log(foo.a); // line 15 => 'hi'
console.log(qux); // line 16 => 'hello'
```

### Answer:
line 79 prints `'hi'`
line 80 prints `'hello'`

The concept being demonstrated here is **Pass-by-Reference**: When objects are passed to a function (including arrays), what the function receives as an argument is a **reference** to the object's location in memory, which in turn points to the object's property values in memory.  The orginal value and the passed value are therefore references to the **same object** and therefore the object's values can be mutated by mutating the argument.

When the function `bar` is declared on line 72, it takes two parameters, both of which are re-assigned to new values inside the body of the function.
We invoke the function `bar` on line 77 passing in the value of `foo`, an object, to `argument1`.  When `foo.a` is reassigned on line 73, because `foo` is an object, that value has been **passed by reference** meaning that the memory location of `foo.a` is what is passed, not the value `'hello'` itself.

However, the value of `qux`, which is passed into `argument2` is a string which is a `primitive` and is therefore **passed by value** i.e. a 'copy' of `'hello'` is passed to the function `bar` which is completely independent from the value held by `qux`.

This is why when logging `foo.a` the we find that `foo` has been mutated, with `foo.a`'s value being reassigned to `'hi`' but when logging `qux` the value is unchanged.

## What does this code do and why?
```js
const campus = { state: 'Boston', address: 'North Ave NW' }; // line 5
campus.state = 'Georgia'; // line 6
console.log(campus); // line 7 => { state: 'Georgia', address: 'North Ave NW' }

const location = Object.freeze({ state: 'CA', country: 'US' }); // line 1
location.state = 'FL'; // line 2
console.log(location); // line 3 => { state: 'CA', country: 'US' }
```
### Answer:
Line 7 prints an object `{ state: 'Georgia', address: 'North Ave NW' }`.
Line 3 throws a `TypeError`.

The principle demonstrated here is the mutability of objects (variables as pointers):  even when declared with `const`, objects can be mutated and properties reassigned unless `Object.freeze()` is used to freeze the object so that its properties cannot be changed. Variables which are assigned objects **do not** store a value, but instead store **pointers** to the object and its properties in memory.  While a constant ("variable") declared with `const` cannot be reassigned to point to another address in memory (this is an intrinsic property of `const` regardless of whether it was assigned to an object or a primitive) the additional addresses and values at those adddresses describing an object's properties can change. This is why it is possible to add, remove, or reassign property names and values of objects declared with `const` but not possible to change the object that `const` points to.

Because the values being assigned to `campus` and `location` are both objects, they can still be read and written even though we are using `const` since what's being stored are references to the objects in memory, not the values themselves.  This is why on line 6, `campus.state` can be reassigned from `'Boston'` to `'Georgia'`. However when we pass the object on line 1 to the `Object` **static method** `freeze()`, we prevent JavaScript from being able to reassign any properties in that object even though it is a pointer, thus throwing a ```TypeError``.


## What does this code do and why?

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
