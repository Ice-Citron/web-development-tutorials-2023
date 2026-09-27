// variable = A container that stores a value. Behaves as if it were the value it contains.

// 1. Declaration       let x;
// 2. Assignment        x = 100;


let x = 40; // datatype "number"
let age = 25;
let gpa = 2.1;
let price = 10.99;

let firstName = "HengJun the Penguin"; // datatype "string"

let online = true; // datatype "boolean"


console.log(x);
console.log(`You are ${age} years old.`);
console.log(`The price is USD${price}`);
console.log(`Your GPA is: ${gpa}`);

// ${} -- this is a placeholder. 
console.log(`${typeof gpa} ${typeof price} ${typeof firstName} ${console.log(x)}`); // Output: number number string undefined

console.log(`Bro is online: ${online}`);


let fullname = `PENGUIN tian`;
let penguinAge = 25;
let student = true;

document.getElementById("p1").textContent = `Your name is ${fullname}`;
document.getElementById("p2").textContent = `You are ${penguinAge} years old as a penguin`;
document.getElementById("p3").textContent = `You are a student: ${student}`;