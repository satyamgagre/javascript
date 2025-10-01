// Strings + Template Literals
let greeting = "Hello, World!";
console.log(greeting);

let name = "Satya";
console.log(greeting + " My name is: " + name);
console.log(`${greeting} My name is: ${name}`);

// Numbers & Arithmetic
let age = 30;
let price = 19.90;
console.log("Age + Price =", age + price);

console.log("10 * 5 =", 10 * 5);
console.log("10 / 5 =", 10 / 5);

// Booleans & Comparisons
let isActive = true;
let isComplete = false;
console.log("isActive:", isActive);
console.log("isComplete:", isComplete);

console.log("5 > 3 =", 5 > 3);
console.log("3 > 5 =", 3 > 5);

// Arrays
let fruits = ["apple", "banana", "cherry"];
console.log("Fruits:", fruits);
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Third fruit:", fruits[2]);

fruits.push("Mango");
console.log("Updated fruits:", fruits);

// Objects
let person = {
    name: "Satya",
    age: 21,
    address: "Pune, Maharashtra",
    isStudent: true
};

console.log("Person object:", person);
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Address:", person.address);
console.log("Is Student:", person.isStudent);
