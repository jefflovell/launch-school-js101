### Practice 3 ###

***For each of these collection objects, demonstrate how you would access the letter `g`***

```
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
```
```
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
arr1[2][1][3];
// => 'g'
```
```
let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
arr2[1].third[0];
// => 'g'
```
```
let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
arr3[2].third[0][0];
// => 'g'
```
```
let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
obj1.b[1]; //obj1['b'][1]
// => 'g'
```
```
let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
obj2.third.g; // to access 'g' as stated
Object.keys(obj2.third)[0]; // to return 'g' as implied
```
***LS Answer:***
```
console.log(arr1[2][1][3]);
console.log(arr2[1]['third'][0]);
console.log(arr3[2]['third'][0][0]);
console.log(obj1['b'][1]);
console.log(Object.keys(obj2.third)[0]);
```