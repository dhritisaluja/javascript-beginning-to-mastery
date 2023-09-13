// object is a reference type  
// arrays are good but not sufficient to represent real world data 
// objects store key value pairs 
// objects don't have index

// how to create objects 

const person = {
    name: "harshit",                                     // or "name" : "harshit" because key is a string. 
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person);

// how to access data from objects 

console.log(person["name"]);  //bracket notation: here we have used double quotes for accessing key of object because key is always of string type in an object. 
        /* or */  
console.log(person.name);
console.log(person["age"]);
console.log(person.hobbies);

// how to add key value pair to objects
person.gender = "male";  // or person["gender"] = "male";
console.log(person);
