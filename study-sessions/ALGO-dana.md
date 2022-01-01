// Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

// ALGORITHM

// -Pass an array of 9 digits 1 - 10 into the function as a parameter;
// -Create a local array which contains the numbers 1 - 10 in numerical order which we will use to check the parameter array against
// -Sort the parameter array numerically
// -For each index (loop of choice) compare the index of the parameter array for strict equality with the same index in the local array
//   -If:  the comparison is falsey, return the current index of the local array.
//   -Else: return ‘no missing digits’ // this is optional.

function missingNum(array) {
  const compare = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
  array = array.sort();
  array.forEach( el => {
    if (!el === compare[el]) {
      return compare[el];
    }
  });
}

missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]); // 5
missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]); // 10
missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]); // 7

// Create a function that takes a number as its argument and returns an array of all its factors.
// Notes
// The input integer will be positive.
// A factor is a number that evenly divides into another number without leaving a remainder. The second example is a factor of 12, because 12 / 2 = 6, with remainder 0.

// ALGORITHM
// 1. Declare a function with one parameter that takes a positive integer as an argument
// 2. Initialize a variable to a result array with initial value of an empty array
// 3. loop through 1 to the number
// 4. check if number is a factor
//   - The number is a factor of the int if the int is exactly divisible by the number without a remainder
//   - If number is divisible without a remainder add to the result array
// 5. Return result array

function factorize(int) {
  let result = [];
  for (let i = 1; i <= int; i += 1) {
    console.log(i);
    console.log(int / i);
    if (int % i === 0) {
      result.push(i);
    }
  }
  return result;
}

// Test cases:
factorize(12) // [1, 2, 3, 4, 6, 12]
factorize(4) // [1, 2, 4]
factorize(17) // [1, 17]