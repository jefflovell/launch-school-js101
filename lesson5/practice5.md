### Practice 5 ###
***Consider the following nested object:***
```
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};
```
***Compute and display the total age of the male members of the family.***

***Answer:***
```
let totalAgeMale = 0;

for (const prop in munsters) {
  if (munsters[prop]['gender'] === 'male') {
    totalAgeMale += munsters[prop]['age'];
  }
}

console.log(totalAgeMale); // 444
```
***LS Answer:***
There are several ways to accomplish this task. One way is to use the for/in loop and add up the ages:

```
let totalMaleAge = 0;

for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalMaleAge += munsters[member].age;
  }
}

console.log(totalMaleAge); // => 444
```
*Another way to do it would be to use the Object.values method along with forEach or a loop:*

```
let memberDetails = Object.values(munsters);
let totalMaleAge = 0;

memberDetails.forEach(member => {
  if (member.gender === 'male') {
    totalMaleAge += member.age;
  }
});
```

*In this example, within each key-value pair in the outer object, the value is itself an object. When iterating through the outer object, we need to access two values from each inner object.*

*Since we don't need the key (each family member's name) from the key-value pairs in the outer object, we can use Object.values as we do in the second solution.*