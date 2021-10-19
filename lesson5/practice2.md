### Practice 2 ###
***How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?***

```
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

let sorted = books.sort((a, b) => Number(a.published) - Number(b.published);

console.log(sorted);

/* expected return
[
  {
    title: 'The Book of Kells',
    author: 'Multiple Authors',
    published: '800'
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    published: '1869'
  },
  {
    title: 'Ulysses',
    author: 'James Joyce',
    published: '1922'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    published: '1925'
  },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel Garcia Marquez',
    published: '1967'
  }
]
*/
```

***LS Answer:***
```
books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
});
```

*As with the previous problem, we must convert the date string to a number since we're performing subtraction with the values.*