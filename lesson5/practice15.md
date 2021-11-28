### Practice Problem 15 ###

***Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.***

```
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];
```

***Answer:***
```
arr.filter( obj => {
  return Object.values(obj).every( subArr => {
    return subArr.every( num => num % 2 === 0);
  });
});
```

***LS Answer:***
```arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});

// => [ { e: [ 8 ], f: [ 6, 10 ] } ]
```
*From the problem description, it is clear that we must return a subset of the objects in the outer array, so filter should hopefully be a fairly obvious method choice to call on that array. The key is then to figure out how to carry out the selection.*

*Since filter returns all the elements for which the callback returns a truthy value and we only want objects where every number is even, every combined with the remainder operator is a good choice here. The situation is complicated slightly by the fact that the numbers are further nested inside the inner arrays, so we need to iterate through these first.*

*If all of the numbers in an inner array are even, then the inner callback returns true to the innermost call to every. If all of the inner callbacks for a particular object return true, then the middle callback returns true to the outer call to every, which in turn causes the outer callback to return true to the filter method for that iteration*