// write a function that
// transforms an array of numbers
// multiplying each number by 2
// and mutates the caller

let myNumbers = [
  1,
  4,
  3,
  7,
  2,
  6
];

function doubleNumbers(numbers) {
  for (let index = 0; index < numbers.length; index++) {
    numbers[index] *= 2;
  }
}

console.log(`original array: ${myNumbers}`);
doubleNumbers(myNumbers);
console.log(`mutated array: ${myNumbers}`);

