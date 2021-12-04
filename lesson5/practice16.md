### Practice Problem 16 ###

***Given the following data structure, write some code that returns an object where the key is the first item in each subarray, and the value is the second.***

```
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
```

***Answer:***

```
let arr = [
            ['a', 1],
            ['b', 'two'],
            ['sea', {'c': 3}],
            ['D', ['a', 'b', 'c']]
          ];

// expected return value
// {
      a: 1,
      b: 'two',
      sea: { c: 3 },
      D: [ 'a', 'b', 'c' ]
    }
```

*Essentially we need to be able to build an object `obj` by iterating through each element of `arr` and assigning `obj[arr[currentElement][0]]` the value of `arr[currentElement][1]`.  Seems very straight-forward to do with a `for` loop... I'm sure there's a more elegant solution using some in-built method, but...*

```
function objectFromArrayOfArrays(arrayOfArrays) {
  let object = {}
  for (let index = 0; index < arrayOfArrays.length; index++) {
    object[arrayOfArrays[index][0]] = arrayOfArrays[index][1];
  }
  return object;
}

objectFromArrayOfArrays(arr);
```

***LS Answer:***
```
let obj = {};
arr.forEach(subarray => {
  let key = subarray[0];
  let value = subarray[1];

  obj[key] = value;
});

obj; // { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
```

*This task may seem complicated, at first, since the collection contains different object types, some nested three levels deep. However, you only have to work at the initial sub-level to reach a solution.*

*In more recent versions of JavaScript, you can use Object.fromEntries in a much simpler solution:*

```Object.fromEntries(arr);```