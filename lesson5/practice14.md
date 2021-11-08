### Practice Problem 14 ###
***Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.***
```
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
```
***Answer:***
- iterate over the object
  - iterate over each subObject
    - if the object key is colors
      - iterate over the value
      - capitalize each value and write to the new array
    - if the object key is size
      - uppercase the value and write it to the new array
- return the new array
```
function produceProps(produce) {
  let results = [];
  for (const item in produce) {
    const currentItem = produce[item];
    if (currentItem.type === 'fruit') {
      let capsColors = [];
      currentItem.colors.forEach( color => {
        const upper = color.charAt(0).toUpperCase();
        const remainder = color.slice(1);
        const capitalized = upper + remainder;
        capsColors.push(capitalized);
      })
      results.push(capsColors);
    } else if (currentItem.type === 'vegetable') {
      results.push(currentItem.size.toUpperCase());
    }
  }
  return results;
}

produceProps(obj);
```

***LS Answer:***
```
let capitalize = word => word[0].toUpperCase() + word.slice(1);

Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
});
```

*From the problem description, we know that we want to return an array where each value corresponds to one of the nested objects in the outer object, so map called on an array of the object's values is a good initial choice.*

*Since the value to be returned to map by the outer callback depends on whether type equates to 'fruit' or 'vegetable', we need to use a conditional statement to perform the actions appropriate to each object.*

*The situation for colors is slightly complicated since we want to pass them to our capitalize function, but they are nested within arrays. Thus, we need to iterate through those arrays to access them. Fortunately, it's a straightforward call to map.*
