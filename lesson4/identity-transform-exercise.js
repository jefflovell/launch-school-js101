// Write a function that
// Doubles the numbers that have
// Odd indices (not neccessarily odd values)

let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleOddIndices(numbers) {
  let results = [];
  for (let index = 0; index < numbers.length; index++) {
    if (index % 2 === 1) {
      results.push(numbers[index] * 2);
    } else {
      results.push(numbers[index]);
    }
  }
  console.log(results);
  return results;
}

console.log(`original array: ${myNumbers}`);
doubleOddIndices(myNumbers);
