//How would you sort the following array by the lengths of each word?

let words = ['go', 'ahead', 'and', 'jump'];

words.sort((a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if ( a.length > b.length) {
    return 1;
  } else {
    return 0;
  }
});

console.log(words); // ['go', 'and', 'jump', ahead]