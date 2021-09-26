// Write a function that
// lets you multiply
// every array item by
// a specified value
// do not mutate the caller

let myNumbers = [1, 4, 3, 7, 2, 6];

function multiply(numArray, multiplier) {
  let results = [];
  console.log(`original array: ${numArray}`);
  console.log(`multiplier: ${multiplier}`);
  for (let index = 0; index < numArray.length; index++) {
    results.push(numArray[index] * multiplier);
  }
  console.log(`result: ${results}`);
  return results;
}

multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]
multiply(myNumbers, 5);
multiply(myNumbers, 582.39);
