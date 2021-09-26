/*

Let's look at an example with objects.
In this example, we want to select the
key-value pairs where the value is 'Fruit'.

*/

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue;
    }
  }

  return selectedFruits;
}

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

// input: an object
//   - keys are produce names, values are produce types
// output: a new object
//   - keys are produce names with values of 'Fruit'

