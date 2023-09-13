// for of loop in array: use to directly access the values of an array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
const fruits2 = [];

for(let fruit of fruits){
    fruits2.push(fruit.toUpperCase());
}
console.log(fruits2);

//traditional way to access values of an array
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}
