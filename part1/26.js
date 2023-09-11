// intro to arrays 
// reference type 
// how to create arrays

// ordered collection of items 

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);
let fruits = ["apple", "mango", "grapes"];
let obj = {}; // object literal  
// console.log(fruits);
// fruits[1] = "banana";   //arrays are mutable means when we modify anything, original array will change itself. No new array will be created. 
// console.log(fruits);
console.log(typeof fruits);  //output will be 'object' because type of array is an object. 
console.log(typeof obj);  //for object literals also we'll get the output as 'object'.
console.log(Array.isArray(fruits)); //By using this method we can check if our object is an array or an object literal since both have same type. O/P: true
console.log(Array.isArray(obj)); /* O/P: false  */


// array indexing 
