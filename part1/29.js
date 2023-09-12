// how to clone array or how to create a different array with same values. We cannot do let array2 = array1. Because this will create just an another reference.  

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];                                         /* method 1 to clone the array but not feasible when there are more elements */ 
// let array2 = array1.slice(0);                                            /* method 2 to clone the array, best method performance wise*/
// let array2 = [].concat(array1);                                          /* method 3 to clone the array, ek khali array lo, usme array1 concatenate kar do */
// let array2 = [...array1];                                                /* method 4 using spread operator (...), most used method */

// how to concatenate two or more arrays

// let array2 = array1.slice(0).concat(["item3", "item4"]);                 /* array2 = ["item1", "item2", "item3", "item4"]  */          
// let array2 = [].concat(array1,["item3", "item4"]);
// concatenate using spread operator
let oneMoreArray = ["item3", "item4"];
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2); 
console.log(array1)
console.log(array2)

