### Create an object that expresses the frequency with which each letter occurs in this string:

```
let statement = "The Flintstones Rock";
```

The output will look something like the following:

```
{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }
```

***Answer:***
#### rules
- case insensitive
- handles punctuation & special chars
- order independent
- letter is key
- count is value

#### data structure
- input
  - a string
- output
  - an object

#### algorithm
- split the string into an array of chars
- iterate over the array of chars
  - if the char is a space, skip it
  - initialize a counter for the current char to 1
  - iterate over the rest of the chars and compare them to the current char
    - for each char that matches the current char, increment the counter
  - store the current char and its count
- convert all of the pairs to an object

```
let chars = statement.toLowerCase().split('');
let foundChars = [];
let charCount = {};

chars.forEach(char => {
  if (char === ' ' || foundChars.includes(char)) {
    return;
  } else {
    foundChars.push(char);
    let count = 0;
    chars.forEach(innerChar => {
      if (innerChar === char) {
        count += 1;
      }
    });
    charCount[char] = count;
  }
});

console.log(charCount); // {t: 3, h: 1, e: 2, f: 1, l: 1, i: 1, n: 2, s: 2, o: 2, r: 1, c: 1, k: 1}
```

***LS Answer:***

```
let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);
```

There are a couple of interesting things to note about this solution. First with the expression statement.`split('').filter(char => char !== ' ')`, we convert the string into an array of characters but we make sure to exclude the space characters by using the filter method.

Note the following line:

`result[char] = result[char] || 0;`

We're taking advantage of something called short-circuiting here. What this means is that JavaScript first evaluates the left operand (`result[char]`) of the `||` operator. If it is truthy, JavaScript doesn't evaluate the right operand; it only evaluates the right operand when the left is falsy. Thus, if a character doesn't exist as a key in our results object, `result[char]` will return `undefined` — a falsy value — resulting in the assignment of `result[char]` to `0`. If `result[char]` instead evaluates to a truthy value such as `1`, it'll simply reassign the current value to `result[char]`.

We can also code up the same logic without using the `||` operator:

```
let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});
```

Note that we don't have to convert the string to an array to solve the problem. We're doing so here only so that we can use the `forEach` method. We could've used a simple for loop to iterate over the string directly:

```
let result = {};

for (let counter = 0; counter < statement.length; counter += 1) {
  let char = statement[counter];
  if (char === ' ') continue;

  result[char] = result[char] || 0;
  result[char] += 1;
}
```