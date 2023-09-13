// array destructuring: agar hume array ki values ko alag alag variables me store karana hain, then we have one shortcut

const myArray = ["value1", "value2", "value3","value4"];

// let myvar1 = myArray[0];                        /* ---------Long method----------
// let myvar2 = myArray[1];                                                        -
// console.log("value of myvar1", myvar1);                                         -
// console.log("value of myvar2", myvar2);            ------------------------------ */

let [var1, var2] = myArray;                        /* -------short method : "value1" will be stored in var1 and "value2" will be stored in var2----------- */

/* Case 1: If elements in our array are less and variables that we have defined  are more */
const myArray2 = ["value1"];
let [var1, var2] = myArray2;   
console.log(var1);                       //output will be value1
console.log(var2);                       //output will be undefined

/* Case 2: If I want to skip one element of array and do not want to store it in any variable */
const myArray3 = ["value1", "value2", "value3"];
let [var1, , var2] = myArray3;           //here we have skipped the element at index 2 i.e. "value2" and stored "value1" into var1 and "value3" into var2


/* Case 3: If you want to store first two elements in different variables but other remaining elements in a new array */
const myArray4 = ["value1", "value2", "value3","value4"];
let [myvar1, myvar2, ...myNewArray] = myArray4;    
console.log("value of myvar1", myvar1);            // output will be value1
console.log("value of myvar2", myvar2);            // output will be value2
console.log(myNewArray);                           // output will be ["value3","value4"]
