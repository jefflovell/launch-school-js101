### What is the return value of the following statement? Why?

`['ant', 'bear', 'caterpillar'].pop().length;`

***Answer:***
The return value is `11`. The `length` property being accessed is the return value of `pop()` which is the last element of the calling array, `'caterpillar'`.  While `pop()` does mutate the caller and change its `length` property, the length of the calling array is not being referenced by `length` in this chain.

***LS Answer:***
There are a couple of things going on here. First, `pop` is being called on the array. `pop` destructively removes the last element from the calling array and returns it. Second, `length` is being accessed on the return value by `pop`. Once we realize that length is evaluating the return value of `pop` ('caterpillar') then the final return value of 11 should make sense.
