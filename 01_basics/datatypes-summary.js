// Primitive data types

// 7 types : String, Number, Boolean, null, undefined, Symbol, 
// BigInt

const score = 100
const scoreVlue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 3436235455428462346n

// Reference (Non Primtive)

//Array , Objects, Functions

const heros = ["hi" , "hello" , "how"]

let myObj= {
    name: "kratika",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);