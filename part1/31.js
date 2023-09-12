// use const for creating array : 90% developers use const for creating arrays and not let because we don't want to initialize the array again as we'll lose our existing values. 

// heap memory ["apple", "mango"] 0x11

const fruits = ["apple", "mango"];       /* fruit is a reference var present in stack memory and it contains the address '0x11' */
fruits.push("banana");                   /* even though the fruits array is of const type, still banana will be added in the array */
console.log(fruits);                     /* output will be ["apple", "mango", "banana"]


// below statement will give type error as assignment to const variable is not valid
fruits = ["grapes", "lichi"];   
