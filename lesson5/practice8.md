### Practice Problem 8 ###
***Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.***
```
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};
```
***Answer:***
```
function looper(object) {
  for (const prop in object) {
    let vowels = 'aeiou';
    object[prop].forEach( word => {
      word.split('').forEach(char => {
        if (vowels.includes(char)) {
          console.log(char);
        }
      })
    })
  }
}
```
***LS Answer:***
```
let vowels = 'aeiou';

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});

// e
// u
// i
// o
// o
// u
// e
// o
// e
// e
// a
// o
```

*The first thing to do here is to get all the values of the object (arrays) using Object.values. We can then call forEach on the resulting subarray. At this point, split can be called within the callback to obtain an array of characters for the current string in that iteration. We can then iterate over this array of characters and pass each vowel to console.log.*