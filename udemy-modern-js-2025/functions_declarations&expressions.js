// ------------------ FUNCTION DECLARATION ------------------
// A simple function that greets the user
function greet(name) {
    console.log(`Hello ${name}!`);
}
greet("Satya"); // Output: Hello Satya!


// ------------------ FUNCTION EXPRESSION ------------------
// A function stored inside a variable (adds two numbers)
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // Output: 8


// ------------------ ARROW FUNCTION ------------------
// A shorter way to write functions (squares a number)
const square = (n) => n * n;
console.log(square(4)); // Output: 16
