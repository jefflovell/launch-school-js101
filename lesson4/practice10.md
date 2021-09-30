### Pick out the minimum age from our current Munster family object:

```
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
```

***Answer:***
```
let entries = Object.entries(ages);
let min = entries[0][1];
let prop;
entries.forEach( el => {
  if ( el[1] < min) {
    min = el[1];
    prop = el;
  }
})
prop; // [ Eddie: 10 ]
```

***LS Answer:***
```
let agesArr = Object.values(ages);
Math.min(...agesArr); // => 10
```

Recall that the `Math.min` function takes multiple numbers as arguments and returns the minimum of those numbers:

```
Math.min(1, 2, 3)
1
```

In the above example, though, we have the numbers in the agesArr array. We use the `...` operator, called the `spread` operator, to convert the array to a list of arguments.