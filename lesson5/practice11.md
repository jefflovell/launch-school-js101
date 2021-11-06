### Practice Problem 11 ###

***Given the following data structure, use the `map` method to return a new array identical in structure to the original, but with each number incremented by `1`. Do not modify the original data structure.***

```
let arr = [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ];
```
***Answer:***

```
arr.map(object => {
  let objectCopy = JSON.parse(JSON.stringify(object));
  for (const key in objectCopy) {
    objectCopy[key] += 1;
  }
  return objectCopy;
})
// [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]
```

***LS Answer:***
```
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map(obj => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }

  return incrementedObj;
}); // => [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]

arr; // => [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ]
```
*Here, we use map to iterate over the array. On each iteration, the callback creates a new object, incrementedObj, and then iterates through the key-value pairs of the current object from the original array. It uses the keys and the current object to create a new key-value pair in incrementedObj, with a value that is one greater than the original value. The callback then returns incrementedObj, and map uses it to transform each element in the array.*

*On the last line, we also see that the original array and the objects both remain intact.*
