// for loop in array 

let fruits = ["apple", "mango", "grapes", "banana"];

// console.log(fruits.length);
// console.log(fruits[fruits.length-1]); //accessing last element of array

//create a new array with all the elements of array 'fruits' in uppercase
let fruits2 = [];  
for(let i=0; i < fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase());   
}

console.log(fruits2);
