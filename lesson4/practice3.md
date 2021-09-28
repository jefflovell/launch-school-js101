### The following code differs slightly from the above code (practice2.md). What is the return value of `map` in this case? Why?

`[1, 2, 3].map(num => num * num);`

***Answer:***
Unlike the previous problem which used a multi-line function body delimited by curly braces `{}`, this arrow function expression is a single line.  When arrow functions are written as a single line expression, the expression to the right of the `=>` symbol is implicitly returned to map for use as the current element's transform value. Therefore, when `map` is called by `[1, 2, 3]`, each element is passed as an argument to the parameter `num` and `num * num` is returned by the callback resulting an array of `[1, 4, 9]` being returned by `map`.

***LS Answer:***
Without braces surrounding the body of the arrow function, JavaScript uses the computed value as the return value. In this case, the callback returns 1, 4, and 9 on the 3 iterations.