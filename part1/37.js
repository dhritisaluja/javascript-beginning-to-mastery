// difference between dot and bracket notaion

const person = {
  name: "harshit",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "listening music"]
}
console.log(person["person hobbies"]); If our key is of more than one word then we won't be able to access it with dot operator. We only have to use bracket notation

// Now we have to add one more key to our object. But the key is stored in a variable.
cont key = "email";

// Now if you use dot operator to add this key to the object, then it will be wrong. 
// for eg. person.key = "dhriti.saluja@gmail.com"; this line of code will result in key: "dhriti.saluja@gmail.com" but we want email: "dhriti.saluja@gmail.com"
// below is the correct code to do this 

person[key] = "harshitvashisth@gmail.com"; // here we have used bracket notation but this time we have not used double quotes because key is a variable. 

console.log(person);
