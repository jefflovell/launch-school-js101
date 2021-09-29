### Add up all of the ages from the Munster family object:

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
let values = Object.values(ages);
let result = 0;
values.forEach(age => result += age);

result; // 6174
```

***LS Answer:***
One solution would be to assign a variable to an initial value of 0 and then iterate through the object values adding each value in turn to the total.

```
let totalAges = 0;
Object.values(ages).forEach(age => totalAges += age);
totalAges; // => 6174
```

Another option would be to use Array.prototype.reduce method:

```
Object.values(ages).reduce((agesSum, currAge) => agesSum + currAge, 0); // 6174
```

One slight advantage of the reduce method is that we don't have to declare and initialize a variable and then reassign to that value from inside the callback. Be sure to read the documentation on Array.prototype.reduce to see how it works.

When faced with a problem such as this one, however, don't get tempted to go 'method hunting' to reach a solution. As demonstrated, even if you don't know the reduce method, the problem can be solved equally well by using forEach to iterate through the object values; you could even use a basic loop (while, for, or do/while) to achieve the same result.